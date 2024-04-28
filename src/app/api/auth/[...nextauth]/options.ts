import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { config } from "@/config/config";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: config.googleAuthProvider.clientId!,
            clientSecret: config.googleAuthProvider.clientSecret!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
};
