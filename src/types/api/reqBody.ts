export interface IRequestBody {
  prompt: string;
  user?: string;
  business_name?: string;
  contact?: {
    phone?: number;
    email?: string;
  } 
}