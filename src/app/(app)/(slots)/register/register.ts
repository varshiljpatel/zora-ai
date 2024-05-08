export const register = async (allData: any) => {
    try {
        const responseJson = await fetch(
            `http://localhost:8080/user/register`,
            {
                method: "POST",
                body: JSON.stringify(allData),
                headers: { "Content-Type": "application/json" },
            }
        );

        if (responseJson.ok) {
            const response = await responseJson.json();
            localStorage.setItem("token", response.response.token);
            return true;
        } else {
            alert("Registration failed");
        }
    } catch (error) {
        console.log("Error registering user:", error);
    }
};
