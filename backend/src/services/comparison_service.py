from src.utils.metrics import MODEL_METRICS
import numpy as np


class ComparisonService:

    def __init__(self, model_service):
        self.model_service = model_service

    def compare(self, features):

        if len(features) != 5:
            raise ValueError(
                "Exactly 5 input features are required."
            )

        features = np.array(features).reshape(1, -1)

        results = []

        for model_name in self.model_service.get_available_models():

            model = self.model_service.get_model(model_name)

            prediction = model.predict(features)[0]

            metrics = MODEL_METRICS.get(
                model_name,
                {
                    "mae": 0,
                    "rmse": 0,
                    "r2": 0,
                },
            )

            results.append({
                "model": model_name,
                "prediction": round(float(prediction), 2),
                "metrics": metrics,
            })

        return results