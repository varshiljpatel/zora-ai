import { ISendResponseOptions } from "@/types/response/sendResponse";

export function sendResponse(options: ISendResponseOptions): Response {
    return Response.json(
        {
            success: options.success,
            message: options.message,
        },
        {
            status: options.status,
        }
    );
}
