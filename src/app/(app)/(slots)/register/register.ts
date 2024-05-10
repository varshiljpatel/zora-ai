import { UserRepository } from "@/repository/user";

export const register = async (allData: any): Promise<boolean> => {
    try {
        // const responseJson = await fetch(
        //     `http://localhost:8080/user/register`,
        //     {
        //         method: "POST",
        //         body: JSON.stringify(allData),
        //         headers: { "Content-Type": "application/json" },
        //     }
        // );

        // if (responseJson.ok) {
        //     const response = await responseJson.json();
        //     localStorage.setItem("token", response.response.token);
        //     return true;
        // } else {
        //     alert("Registration failed");
        // }
        UserRepository.createUser(allData);
        return true;
    } catch (error) {
        console.log("Error registering user:", error);
        return false;
    }
    return false;
};
