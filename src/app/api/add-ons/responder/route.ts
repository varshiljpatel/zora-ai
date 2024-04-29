import { genAI } from "@/lib/geminiClient";
import { sendResponse } from "@/lib/response/sendResponse";
import { IResponderBody } from "@/types/api/add-ons/responder";
import { GenerateContentResult, GenerativeModel } from "@google/generative-ai";
import { responderPrompt } from "./prompt";

export const runtime = "edge";

export async function POST(request: Request) {
    if (!request.body) {
        return sendResponse({
            status: 400,
            success: false,
            message: "Request body is undefined",
        });
    }

    const reqBody: IResponderBody = await request.json();

    const receivedMail: string = reqBody.received_email;

    let prompt: string | null = null;
    if (!reqBody.business_name || !reqBody.contact) {
        prompt = responderPrompt({
            receivedMail,
        });
    } else {
        prompt = responderPrompt({
            receivedMail,
            details: {
                business_name: reqBody.business_name,
                contact: {
                    email: reqBody.contact?.email,
                    phone: reqBody.contact?.phone,
                },
            },
        });
    }

    const generationConfig = {
        maxOutputTokens: 350,
        temperature: 0.5,
    };

    const model: GenerativeModel = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig,
    });

    if (prompt == null) {
        return sendResponse({
            status: 500,
            message: "Prompt is empty",
            success: false,
        });
    }
    const response: GenerateContentResult = await model.generateContent(prompt);

    if (response.response.candidates === undefined) return;

    return sendResponse({
        success: true,
        message:
            response.response.candidates[0].content.parts[0].text?.toString(),
        status: 200,
    });
}
