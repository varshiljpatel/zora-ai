export const handleApiCall = async (setResponse: any, storedValue: string) => {
    try {
        const res = await fetch("/api/add-ons/responder", {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                received_email: storedValue,
            }),
        });
        setResponse(await res.json());
    } catch (error) {
        setResponse("Error occurred while making API call");
    }
};
