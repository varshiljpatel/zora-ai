import { genAI } from "@/lib/geminiClient";
import { sendResponse } from "@/lib/response/sendResponse";
import {
    GenerateContentResult,
    // GenerateContentStreamResult,
    GenerativeModel,
} from "@google/generative-ai";

let getRandomNumberBetween: number =
    Math.floor(Math.random() * (5 - 3 + 1)) + 3;

const prompt: string = `Write ${getRandomNumberBetween} "mail templates to send someone seperates by '||' for a business in a single sentense.
For example:
"Write a mail to order stock? || Write a mail to manager for getting p&l statement? || Write a mail to set a meeting?"
Note: Each question contains 10 tokens.`;

// const prompt = "3+3=?";

export const runtime = "edge";

export async function GET() {
    const generationConfig = {
        maxOutputTokens: 50,
        temperature: 0.9,
    };

    const model: GenerativeModel = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig,
    });

    const response: GenerateContentResult = await model.generateContent(prompt);

    if (response.response.candidates![0].content.parts === undefined) return;
    return sendResponse({
        success: true,
        message:
            response.response.candidates![0].content?.parts[0]?.text?.toString(),
        status: 200,
    });

    // Stream a response
    // const response: GenerateContentStreamResult =
    // 	await model.generateContentStream(prompt);

    // const stream: ReadableStream<any> =
    // 	GoogleGenerativeAIStream(response);

    // return new StreamingTextResponse(stream);
}
