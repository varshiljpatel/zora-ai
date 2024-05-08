export const config = {
    googleApiKey: process.env.GOOGLE_API_KEY,
    serverBaseUrl: process.env.SERVER_BASE_URL,

    // Google auth provider
    googleAuthProvider: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },

    // Next auth url
    nextAuthUrl: process.env.NEXTAUTH_URL,

    // Database uri
    databaseUri: {
        mongodb: process.env.MONGODB_URI || "",
    },
};
