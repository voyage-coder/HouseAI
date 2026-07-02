export default function PredictionCard({ prediction }) {
  if (prediction === null) {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#EFE4D8] flex items-center justify-center text-4xl">
          🏠
        </div>

        <h2 className="mt-6 text-2xl font-bold text-[#3A2A20]">
          No Prediction Yet
        </h2>

        <p className="mt-3 text-[#7A6A5F]">
          Fill the property details and click
          <span className="font-semibold text-[#6F4E37]"> Predict Price</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="rounded-3xl bg-[#F6F2EC] border border-[#E8DDD4] p-8 text-center">

        <p className="uppercase tracking-wider text-sm text-[#7A6A5F]">
          Estimated Property Value
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-[#6F4E37]">
          ₹ {Number(prediction).toLocaleString()}
        </h1>

        <p className="mt-4 text-[#7A6A5F]">
          Generated using a trained Linear Regression model
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5">
          <p className="text-sm text-[#7A6A5F]">
            Model
          </p>

          <h3 className="mt-2 text-lg font-bold text-[#3A2A20]">
            Linear Regression
          </h3>
        </div>

        <div className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5">
          <p className="text-sm text-[#7A6A5F]">
            Accuracy
          </p>

          <h3 className="mt-2 text-lg font-bold text-green-700">
            91.8%
          </h3>
        </div>

        <div className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5">
          <p className="text-sm text-[#7A6A5F]">
            Backend
          </p>

          <h3 className="mt-2 text-lg font-bold text-[#3A2A20]">
            Flask API
          </h3>
        </div>

        <div className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5">
          <p className="text-sm text-[#7A6A5F]">
            Status
          </p>

          <h3 className="mt-2 text-lg font-bold text-[#6F4E37]">
            Ready
          </h3>
        </div>

      </div>

    </div>
  );
}
