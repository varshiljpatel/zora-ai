import { stringConfig } from "@/config/strings";
import { UserRepository } from "@/repository/user";
import { IIncommingTokenResponse } from "@/types/response/incommingResponse";

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

        const response = await UserRepository.createUser(allData);
        const data: IIncommingTokenResponse = response.data;
        if (response.status === 201 && data.success && data.response?.token) {
            localStorage.setItem(
                stringConfig.localStorageToken,
                data.response.token
            );
            return true;
        } else {
            alert("Registration failed");
        }
        return true;
    } catch (error: Error | any) {
        alert("Error registering user:" + error.message);
        return false;
    }
    return false;
};
