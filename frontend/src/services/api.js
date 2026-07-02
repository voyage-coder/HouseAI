export async function predictHousePrice(formData) {

    const response = await fetch(
        "http://127.0.0.1:5000/predict",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch prediction.");
    }

    return await response.json();

}