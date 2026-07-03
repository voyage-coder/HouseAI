import { useEffect, useState } from "react";
import { getRecommendation } from "../services/api";

export default function RecommendationCard() {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecommendation() {
      try {
        const data = await getRecommendation();
        setRecommendation(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadRecommendation();
  }, []);

  if (loading) {
    return (
      <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8">

        <h2 className="text-2xl font-bold text-[#3A2A20]">
          AI Recommendation
        </h2>

        <p className="mt-6 text-[#7A6A5F]">
          Loading recommendation...
        </p>

      </div>
    );
  }

  if (!recommendation) {
    return (
      <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8">

        <h2 className="text-2xl font-bold text-[#3A2A20]">
          AI Recommendation
        </h2>

        <p className="mt-6 text-red-600">
          Failed to load recommendation.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFE4D8] text-3xl">
          ⭐
        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#3A2A20]">
            Recommended Model
          </h2>

          <p className="text-[#7A6A5F]">
            Best Performing Regression Algorithm
          </p>

        </div>

      </div>

      {/* Model */}

      <div className="mt-8 rounded-3xl border border-[#E8DDD4] bg-[#FCFAF8] p-6">

        <p className="text-sm uppercase tracking-wider text-[#7A6A5F]">
          Model
        </p>

        <h2 className="mt-3 text-3xl font-black text-[#6F4E37]">
          {recommendation.recommended_model}
        </h2>

      </div>

      {/* Metrics */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5">

          <p className="text-sm text-[#7A6A5F]">
            MAE
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#3A2A20]">
            {recommendation.metrics.mae.toFixed(2)}
          </h3>

        </div>

        <div className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5">

          <p className="text-sm text-[#7A6A5F]">
            RMSE
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#3A2A20]">
            {recommendation.metrics.rmse.toFixed(2)}
          </h3>

        </div>

        <div className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5">

          <p className="text-sm text-[#7A6A5F]">
            R² Score
          </p>

          <h3 className="mt-2 text-xl font-bold text-green-700">
            {(recommendation.metrics.r2 * 100).toFixed(2)}%
          </h3>

        </div>

      </div>

      {/* Reason */}

      {/* Why Recommended */}

    <div className="mt-8 rounded-3xl bg-[#EFE4D8] p-6">

    <h3 className="text-xl font-bold text-[#3A2A20]">
        Why was this model selected?
    </h3>

    <div className="mt-5 space-y-3">

        {recommendation.reasons.map((reason, index) => (

        <div
            key={index}
            className="flex items-center gap-3"
        >

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6F4E37] text-sm text-white">
            ✓
            </div>

            <p className="text-[#6F4E37]">
            {reason}
            </p>

        </div>

        ))}

    </div>

    </div>

    </div>
  );
}