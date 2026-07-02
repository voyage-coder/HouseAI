# Import required libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib
# no matpoltlib or seaborn needed -> used fro plots 
# no visualization
# This follows a software engineering principle called Single Responsibility Principle(SRP) - A file should have one primary job.

# Load dataset
# df = pd.read_csv("../data/housing.csv")
df = pd.read_csv("data/housing.csv")
# from pathlib import Path

# Verify data loaded or not
print("Datatset loaded successfully")

# Remove Answer column from df-it is test type and also useless
df = df.drop("Address", axis=1)

# Check df columns
print(df.columns)

# Seperate X and y
X = df.drop("Price", axis=1)
y = df["Price"]

# Check X and y
print(X.shape)
print(y.shape)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, 
    y,
    test_size=0.2,
    random_state=42
)

# Create model
model = LinearRegression()

# Train model
model.fit(X_train, y_train)
print("Model trained successfully")

# Save trained model
joblib.dump(model, "models/house_price_model.joblib")
print("Model saved successfully")
