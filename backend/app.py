from flask import Flask, request, jsonify
from flask_cors import CORS

from src.services.model_service import ModelService
from src.services.prediction_service import PredictionService
from src.services.comparison_service import ComparisonService
from src.services.recommendation_service import RecommendationService

app = Flask(__name__)
CORS(app)

# ==========================================================
# Initialize Services
# ==========================================================

model_service = ModelService()
prediction_service = PredictionService(model_service)
comparison_service = ComparisonService(model_service)
recommendation_service = RecommendationService()

# ==========================================================
# Home
# ==========================================================

@app.route("/")
def home():
    return jsonify({
        "success": True,
        "message": "Welcome to HouseAI API 🚀"
    })


# ==========================================================
# Available Models
# ==========================================================

@app.route("/models", methods=["GET"])
def get_models():
    return jsonify({
        "success": True,
        "models": model_service.get_available_models()
    })


# ==========================================================
# Predict
# ==========================================================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "message": "Request body is missing."
            }), 400

        model = data.get("model")
        features = data.get("features")

        if model is None or features is None:
            return jsonify({
                "success": False,
                "message": "Model or features missing."
            }), 400

        result = prediction_service.predict(
            model,
            features
        )

        return jsonify(result)

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# ==========================================================
# Compare Models
# ==========================================================

@app.route("/compare", methods=["POST"])
def compare():

    try:

        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "message": "Request body is missing."
            }), 400

        features = data.get("features")

        if features is None:
            return jsonify({
                "success": False,
                "message": "Features missing."
            }), 400

        result = comparison_service.compare(features)

        return jsonify(result)

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# ==========================================================
# Recommendation
# ==========================================================

@app.route("/recommend", methods=["GET"])
def recommend():

    try:

        return jsonify(
            recommendation_service.recommend()
        )

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# ==========================================================
# Run
# ==========================================================

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )