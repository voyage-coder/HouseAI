const models = [
  {
    name: "Linear Regression",
    r2: "91.80%",
    color: "#6F4E37",
    description:
      "Predicts house prices by assuming a linear relationship between features and target.",
    advantages: [
      "Simple and Fast",
      "Easy to Interpret",
      "Works well on linear data",
    ],
    disadvantages: [
      "Sensitive to Outliers",
      "Cannot capture complex relationships",
    ],
    best: "Best for simple linear datasets.",
  },
  {
    name: "Ridge Regression",
    r2: "91.80%",
    color: "#8A6244",
    description:
      "Adds L2 Regularization to reduce overfitting while keeping all features.",
    advantages: [
      "Reduces Overfitting",
      "Stable Predictions",
      "Handles Multicollinearity",
    ],
    disadvantages: [
      "Doesn't remove features",
      "Needs alpha tuning",
    ],
    best: "Good when features are highly correlated.",
  },
  {
    name: "Lasso Regression",
    r2: "91.80%",
    color: "#9B7150",
    description:
      "Uses L1 Regularization and can automatically remove unnecessary features.",
    advantages: [
      "Feature Selection",
      "Reduces Complexity",
      "Simple Model",
    ],
    disadvantages: [
      "Can underfit",
      "Sensitive to alpha",
    ],
    best: "Useful when many irrelevant features exist.",
  },
  {
    name: "ElasticNet",
    r2: "87.35%",
    color: "#A47D59",
    description:
      "Combines Ridge and Lasso Regularization.",
    advantages: [
      "Feature Selection",
      "Handles Correlated Features",
      "Balanced Regularization",
    ],
    disadvantages: [
      "Needs two hyperparameters",
    ],
    best: "Good for high-dimensional datasets.",
  },
  {
    name: "Decision Tree",
    r2: "74.22%",
    color: "#B38B67",
    description:
      "Learns decision rules by recursively splitting the dataset.",
    advantages: [
      "Easy to Visualize",
      "Captures Non-linearity",
    ],
    disadvantages: [
      "Overfits Easily",
      "Unstable",
    ],
    best: "Useful for explainable decisions.",
  },
  {
    name: "Random Forest",
    r2: "88.30%",
    color: "#9D7658",
    description:
      "Builds many decision trees and averages predictions.",
    advantages: [
      "High Accuracy",
      "Less Overfitting",
      "Feature Importance",
    ],
    disadvantages: [
      "Slow Training",
      "Large Model",
    ],
    best: "Excellent general-purpose regression model.",
  },
  {
    name: "Gradient Boosting",
    r2: "90.07%",
    color: "#7F5B42",
    description:
      "Sequentially builds trees that correct previous mistakes.",
    advantages: [
      "Very Accurate",
      "Learns Complex Patterns",
    ],
    disadvantages: [
      "Slow",
      "Needs Hyperparameter Tuning",
    ],
    best: "Great for structured tabular datasets.",
  },
  {
    name: "XGBoost",
    r2: "90.67%",
    color: "#5F3F2D",
    description:
      "Optimized Gradient Boosting with regularization and parallel processing.",
    advantages: [
      "Fast",
      "Highly Accurate",
      "Industry Standard",
    ],
    disadvantages: [
      "More Complex",
      "Many Hyperparameters",
    ],
    best: "Best choice for Kaggle and production ML.",
  },
];

export default function Learn() {
  return (
    <div className="min-h-screen bg-[#FCFAF8]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="text-5xl font-black text-[#3A2A20]">
          Learn Machine Learning Models
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#7A6A5F]">
          Every algorithm used in HouseAI with its strengths, weaknesses,
          real-world applications and performance on our housing dataset.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {models.map((model) => (

            <div
              key={model.name}
              className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <h2
                  className="text-3xl font-black"
                  style={{ color: model.color }}
                >
                  {model.name}
                </h2>

                <div className="rounded-full bg-[#EFE4D8] px-5 py-2 font-bold text-[#6F4E37]">
                  R² {model.r2}
                </div>

              </div>

              <p className="mt-6 leading-7 text-[#7A6A5F]">
                {model.description}
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-[#3A2A20]">
                  Advantages
                </h3>

                <ul className="mt-3 space-y-2">

                  {model.advantages.map((item) => (

                    <li
                      key={item}
                      className="text-[#6F4E37]"
                    >
                      ✔ {item}
                    </li>

                  ))}

                </ul>

              </div>

              <div className="mt-8">

                <h3 className="font-bold text-[#3A2A20]">
                  Disadvantages
                </h3>

                <ul className="mt-3 space-y-2">

                  {model.disadvantages.map((item) => (

                    <li
                      key={item}
                      className="text-red-600"
                    >
                      ✖ {item}
                    </li>

                  ))}

                </ul>

              </div>

              <div className="mt-8 rounded-2xl bg-[#FCFAF8] border border-[#E8DDD4] p-5">

                <h3 className="font-bold text-[#3A2A20]">
                  Best Use Case
                </h3>

                <p className="mt-3 text-[#7A6A5F]">
                  {model.best}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}