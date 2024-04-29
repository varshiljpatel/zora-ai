import { IRequestBody } from "../reqBody";

export interface IResponderBody extends IRequestBody {
    received_email: string;
}
