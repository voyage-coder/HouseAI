# Import flask
from flask import Flask, request, jsonify

# CORS ERROR
from flask_cors import CORS

# import prediction function
from src.predict import predict_house_price

# Create Flask application
app = Flask(__name__)
CORS(app)

# Create Home route - whenever someone calls or visits "/" then flask should execute home() funtion
@app.route("/") # by default GET/ request
def home():
    return "House Price Prediction API is running."

# Create /predict route
@app.route("/predict", methods=["POST"]) # we are saying when incoming POST request is received to this URL
def predict():
    data = request.get_json()
    income = data["income"]
    house_age = data["houseAge"]
    rooms = data["rooms"]
    bedrooms = data["bedrooms"]
    population = data["population"]

    price = predict_house_price(
        income,
        house_age,
        rooms,
        bedrooms,
        population
    )

    return jsonify({
        "predicted_price" : price
    })

# How Flask server starts or runs
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
