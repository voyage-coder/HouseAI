import { useState } from "react";

import PredictionForm from "../components/PredictionForm";
import PredictionCard from "../components/PredictionCard";
import RecommendationCard from "../components/RecommendationCard";

export default function Predict() {
  const [prediction, setPrediction] = useState(null);

  const [selectedModel, setSelectedModel] = useState(
    "Linear Regression"
  );

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCFAF8]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Heading */}

        <div className="mb-14">

          <h1 className="text-5xl font-black text-[#3A2A20]">
            Predict House Price
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#7A6A5F]">
            Enter the property details, choose a Machine Learning model,
            and estimate the property's market value instantly.
          </p>

        </div>

        {/* Layout */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8 shadow-sm">

            <PredictionForm
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                setPrediction={setPrediction}
                prediction={prediction}
                loading={loading}
                setLoading={setLoading}
                />

          </div>

          {/* Right */}

          <div className="space-y-8">

            <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8 shadow-sm">

              <PredictionCard
                prediction={prediction}
                model={selectedModel}
              />

            </div>

            <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8 shadow-sm">

              <RecommendationCard
                model={selectedModel}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}