const configMut = {
    googleApiKey: process.env.GOOGLE_API_KEY,
    serverBaseUrl:
        process.env.NODE_BASE_URL || "https://zora-node-xlzi.onrender.com",

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

export const config = Object.freeze(configMut);
