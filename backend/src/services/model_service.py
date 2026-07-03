import joblib
from pathlib import Path


class ModelService:
    def __init__(self):
        self.models = {}
        self.load_models()

    def load_models(self):
        """
        Load all trained models into memory.
        This runs only once when the Flask application starts.
        """

        model_dir = Path(__file__).resolve().parents[2] / "models"

        self.models = {
            "Linear Regression": joblib.load(model_dir / "linear_model.joblib"),
            "Ridge Regression": joblib.load(model_dir / "ridge_model.joblib"),
            "Lasso Regression": joblib.load(model_dir / "lasso_model.joblib"),
            "ElasticNet Regression": joblib.load(model_dir / "elastic_model.joblib"),
            "Decision Tree Regression": joblib.load(model_dir / "decision_tree_model.joblib"),
            "Random Forest Regression": joblib.load(model_dir / "random_forest_model.joblib"),
            "Gradient Boosting Regression": joblib.load(model_dir / "gradient_boosting_model.joblib"),
            "XGBoost Regression": joblib.load(model_dir / "xgboost_model.joblib"),
        }

    def get_model(self, model_name):
        """
        Return the requested model.
        Raise an error if it does not exist.
        """

        if model_name not in self.models:
            raise ValueError(f"Model '{model_name}' not found.")

        return self.models[model_name]

    def get_available_models(self):
        """
        Return all available model names.
        """

        return list(self.models.keys())