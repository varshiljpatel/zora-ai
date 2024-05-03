import { genAI } from "@/lib/geminiClient";
import { sendResponse } from "@/lib/response/sendResponse";
import { IGenerateEmailBody } from "@/types/api/generateEmail";
import { GenerateContentResult, GenerativeModel } from "@google/generative-ai";

export const runtime = "edge";

export async function POST(request: Request) {
    if (!request.body) {
        return sendResponse({
            success: false,
            message: "Request body is undefined",
            status: 400,
        });
    }

    const reqBody: IGenerateEmailBody = await request.json();

    const userPrompt: string = reqBody.prompt;

    // Custom prompt
    const prompt: string = `Write a professional email as a business perspective for purpose of "${userPrompt}".
	Example Format: 
	"<Subject: subject_here>
	<Greets dear, sir etc.>
	<content>
	Name of sender: ZoraAI
	Sender mobile: +910011223344
	Sender email: zora@example.com"
	Note: Response will be less then 350 tokens.`;

    const generationConfig = {
        maxOutputTokens: 350,
        temperature: 0.5,
    };

    const model: GenerativeModel = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig,
    });

    const response: GenerateContentResult = await model.generateContent(prompt);

    if (response.response.candidates === undefined) return;

    return Response.json(
        {
            success: true,
            message:
                response.response.candidates[0].content.parts[0].text?.toString(),
        },
        {
            status: 200,
        }
    );
}
