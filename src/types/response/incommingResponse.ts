export interface IIncommingResponse {
    success: boolean;
    message: string;
}

export interface IIncommingTokenResponse extends IIncommingResponse {
    response?: {
        token?: string;
    };
}
