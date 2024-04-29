export interface IRequestBody {
    user?: string;
    business_name?: string;
    contact?: {
        phone?: number | string;
        email?: string;
    };
}
