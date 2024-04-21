import { config } from "@/config/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const genAI = new GoogleGenerativeAI(config.googleApiKey?.toString() || "");