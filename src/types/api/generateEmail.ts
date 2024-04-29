import { IRequestBody } from "./reqBody";

export interface IGenerateEmailBody extends IRequestBody {
    prompt: string;
}
