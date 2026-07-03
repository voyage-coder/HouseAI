export default function PredictionCard({ prediction }) {
  if (!prediction) {
    return (
      <div className="flex h-full min-h-[500px] items-center justify-center">

        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#EFE4D8] text-5xl">
            🏠
          </div>

          <h2 className="mt-8 text-3xl font-bold text-[#3A2A20]">
            No Prediction Yet
          </h2>

          <p className="mt-4 max-w-sm text-[#7A6A5F]">
            Enter the property details and click
            <span className="font-semibold text-[#6F4E37]">
              {" "}
              Predict House Price
            </span>{" "}
            to estimate the market value.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Prediction */}

      <div className="rounded-[32px] bg-[#FCFAF8] border border-[#E8DDD4] p-8 text-center">

        <p className="uppercase tracking-widest text-sm text-[#7A6A5F]">
          Estimated House Price
        </p>

        <h1 className="mt-5 text-5xl font-black text-[#6F4E37] break-words">
          ₹ {prediction.prediction.toLocaleString()}
        </h1>

        <p className="mt-4 text-[#7A6A5F]">
          Generated using
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#3A2A20]">
          {prediction.model}
        </h2>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-2 gap-5">

        <div className="rounded-3xl border border-[#E8DDD4] bg-[#FCFAF8] p-6">

          <p className="text-sm text-[#7A6A5F]">
            MAE
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#3A2A20]">
            {prediction.metrics.mae.toFixed(2)}
          </h2>

        </div>

        <div className="rounded-3xl border border-[#E8DDD4] bg-[#FCFAF8] p-6">

          <p className="text-sm text-[#7A6A5F]">
            RMSE
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#3A2A20]">
            {prediction.metrics.rmse.toFixed(2)}
          </h2>

        </div>

        <div className="rounded-3xl border border-[#E8DDD4] bg-[#FCFAF8] p-6">

          <p className="text-sm text-[#7A6A5F]">
            R² Score
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-700">
            {(prediction.metrics.r2 * 100).toFixed(2)}%
          </h2>

        </div>

        <div className="rounded-3xl border border-[#E8DDD4] bg-[#FCFAF8] p-6">

          <p className="text-sm text-[#7A6A5F]">
            Status
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#6F4E37]">
            Ready
          </h2>

        </div>

      </div>

      {/* Insight */}

      <div className="rounded-3xl border border-[#E8DDD4] bg-[#EFE4D8] p-6">

        <h3 className="text-xl font-bold text-[#3A2A20]">
          Model Insight
        </h3>

        <p className="mt-3 leading-7 text-[#6F4E37]">
          This prediction was generated using{" "}
          <span className="font-semibold">
            {prediction.model}
          </span>.
          Compare this prediction with the remaining Machine Learning
          models to understand which algorithm performs best for this
          dataset.
        </p>

      </div>

    </div>
  );
}