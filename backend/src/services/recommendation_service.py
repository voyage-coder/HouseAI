from src.utils.metrics import MODEL_METRICS
MODEL_REASONS = {
    "Linear Regression": "Best suited for predominantly linear datasets.",
    "Ridge Regression": "Handles multicollinearity while reducing overfitting.",
    "Lasso Regression": "Performs automatic feature selection.",
    "ElasticNet Regression": "Combines L1 and L2 regularization.",
    "Decision Tree Regression": "Captures non-linear relationships.",
    "Random Forest Regression": "Reduces overfitting using ensemble learning.",
    "Gradient Boosting Regression": "Sequentially improves prediction accuracy.",
    "XGBoost Regression": "Optimized boosting with excellent predictive performance.",
}

class RecommendationService:

    def recommend(self):

        best_model = max(
            MODEL_METRICS,
            key=lambda model: MODEL_METRICS[model]["r2"]
        )

        metrics = MODEL_METRICS[best_model]

        return {
            "recommended_model": best_model,
            "metrics": metrics,
            "reasons": [
                "Highest R² Score",
                "Lowest RMSE",
                "Lowest MAE",
                MODEL_REASONS[best_model],
            ]
        }