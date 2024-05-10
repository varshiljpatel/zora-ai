export const stringConfig = {
    author: { name: "ascen", url: "https://www.github.com/anascen" },
    title: "zora",
    description: "An ai email writer for business!",
    localStorageToken: "token",
    loginDescription: function () {
        return `Securely access ${this.title} by available methods. This eliminates the need to manage separate login credentials.`;
    },
    registerDescription: function () {
        return `Securely sign up in ${this.title} by providing requied information. Once register you will be able to access ${this.title}'s services.`;
    },
};
