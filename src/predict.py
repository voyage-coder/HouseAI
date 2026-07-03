# Import required libraries
import joblib
import pandas as pd

# Loads saved model
model = joblib.load("models/linear_model.joblib")
print("Model loaded successfully")

# Function to predict house price
def predict_house_price(
    income,
    house_age,
    rooms,
    bedrooms,
    population
):
    input_data = pd.DataFrame(
        [[income, house_age, rooms, bedrooms, population]],
        columns = [
            "Avg. Area Income", 
            "Avg. Area House Age",
            "Avg. Area Number of Rooms",
            "Avg. Area Number of Bedrooms",
            "Area Population"
        ]
    )

    prediction = model.predict(input_data)
    return prediction[0]

# Test the prediction function

if __name__ == "__main__":

    predicted_price = predict_house_price(
        income=65000,
        house_age=7,
        rooms=6,
        bedrooms=4,
        population=35000
    )

    print("Predicted House Price:", predicted_price)