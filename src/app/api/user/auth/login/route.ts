import { sendResponse } from "@/lib/response/sendResponse";

export const runtime = "edge";

export async function POST(request: Request) {
    if (await !request.json()) {
        return sendResponse({
            success: false,
            message: "Request body is undefined",
            status: 400,
        });
    }

    // const reqBody = await request.json()
    // console.log(reqBody);

    return sendResponse({
        status: 200,
        success: true,
        message: "done",
    });
}
