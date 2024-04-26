import { Account, NextAuthOptions, Profile, User } from "next-auth";
import dbConnect from "@/lib/dbConnect";
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
};
