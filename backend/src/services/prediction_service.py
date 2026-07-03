from src.utils.metrics import MODEL_METRICS
import numpy as np


class PredictionService:

    def __init__(self, model_service):
        self.model_service = model_service

    def predict(self, model_name, features):

        model = self.model_service.get_model(model_name)

        if len(features) != 5:
            raise ValueError(
                "Exactly 5 input features are required."
            )

        features = np.array(features).reshape(1, -1)

        prediction = model.predict(features)[0]

        metrics = MODEL_METRICS.get(
            model_name,
            {
                "mae": 0,
                "rmse": 0,
                "r2": 0,
            },
        )

        return {
            "model": model_name,
            "prediction": round(float(prediction), 2),
            "metrics": metrics,
        }