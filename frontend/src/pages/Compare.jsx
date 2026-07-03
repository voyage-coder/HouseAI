import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { compareModels } from "../services/api";
import ComparisonCharts from "../components/ComparisonCharts";

export default function Compare() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const [formData, setFormData] = useState(
    location.state?.features || {
      income: "",
      age: "",
      rooms: "",
      bedrooms: "",
      population: "",
    }
  );

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function runComparison(features) {
    setLoading(true);

    try {
      const data = await compareModels(features);

      const sorted = [...data].sort(
        (a, b) => b.metrics.r2 - a.metrics.r2
      );

      setResults(sorted);
    } catch (error) {
      console.error(error);
      alert("Failed to compare models.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const features = [
      Number(formData.income),
      Number(formData.age),
      Number(formData.rooms),
      Number(formData.bedrooms),
      Number(formData.population),
    ];

    runComparison(features);
  }

  useEffect(() => {
    if (location.state?.features) {
      const f = location.state.features;

      runComparison([
        Number(f.income),
        Number(f.age),
        Number(f.rooms),
        Number(f.bedrooms),
        Number(f.population),
      ]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFAF8]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-12">

          <h1 className="text-5xl font-black text-[#3A2A20]">
            Compare Regression Models
          </h1>

          <p className="mt-4 text-lg text-[#7A6A5F]">
            Compare predictions and performance metrics of all trained
            Machine Learning models.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8"
        >

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            <input
              type="number"
              name="income"
              placeholder="💰 Income"
              value={formData.income}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37]"
            />

            <input
              type="number"
              name="age"
              placeholder="🏡 House Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37]"
            />

            <input
              type="number"
              name="rooms"
              placeholder="🛏 Rooms"
              value={formData.rooms}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37]"
            />

            <input
              type="number"
              name="bedrooms"
              placeholder="🚪 Bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37]"
            />

            <input
              type="number"
              name="population"
              placeholder="👥 Population"
              value={formData.population}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37]"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 rounded-2xl bg-[#6F4E37] px-8 py-4 font-bold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Comparing..." : "📊 Compare Models"}
          </button>

        </form>

        {results.length > 0 && (

          <>
            <div className="mt-12 overflow-hidden rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC]">

              <div className="border-b border-[#E8DDD4] bg-[#EFE4D8] p-6">

                <h2 className="text-2xl font-bold text-[#3A2A20]">
                  Comparison Results
                </h2>

              </div>

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead>

                    <tr className="border-b border-[#E8DDD4] bg-[#FCFAF8]">

                      <th className="p-5 text-left">Rank</th>
                      <th className="p-5 text-left">Model</th>
                      <th className="p-5 text-center">Prediction</th>
                      <th className="p-5 text-center">MAE</th>
                      <th className="p-5 text-center">RMSE</th>
                      <th className="p-5 text-center">R²</th>

                    </tr>

                  </thead>

                  <tbody>

                    {results.map((model, index) => (

                      <tr
                        key={model.model}
                        className={`border-b border-[#E8DDD4] ${
                          index === 0
                            ? "bg-[#FFF7EA]"
                            : "bg-white"
                        }`}
                      >

                        <td className="p-5 font-bold">

                          {index === 0 ? "🏆" : index + 1}

                        </td>

                        <td className="p-5 font-semibold text-[#3A2A20]">
                          {model.model}
                        </td>

                        <td className="p-5 text-center">
                          ₹ {model.prediction.toLocaleString()}
                        </td>

                        <td className="p-5 text-center">
                          {model.metrics.mae.toFixed(0)}
                        </td>

                        <td className="p-5 text-center">
                          {model.metrics.rmse.toFixed(0)}
                        </td>

                        <td className="p-5 text-center font-bold text-green-700">
                          {(model.metrics.r2 * 100).toFixed(2)}%
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            <div className="mt-12">

              <ComparisonCharts
                data={results}
              />

            </div>

          </>

        )}

      </div>

    </div>
  );
}