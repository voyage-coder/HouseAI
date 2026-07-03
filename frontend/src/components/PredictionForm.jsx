import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getModels, predictPrice } from "../services/api";

export default function PredictionForm({
  selectedModel,
  setSelectedModel,
  setPrediction,
  prediction,
  loading,
  setLoading,
}) {
  const navigate = useNavigate();

  const [models, setModels] = useState([]);

  const [formData, setFormData] = useState({
    income: "",
    age: "",
    rooms: "",
    bedrooms: "",
    population: "",
  });

  useEffect(() => {
    async function loadModels() {
      try {
        const data = await getModels();

        setModels(data);

        if (data.length > 0) {
          setSelectedModel(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadModels();
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const features = [
        Number(formData.income),
        Number(formData.age),
        Number(formData.rooms),
        Number(formData.bedrooms),
        Number(formData.population),
      ];

      const result = await predictPrice(
        selectedModel,
        features
      );

      setPrediction(result);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  }

  function handleCompare() {
    navigate("/compare", {
      state: {
        features: formData,
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-[#3A2A20]">
        Property Details
      </h2>

      <div className="grid gap-5">

        <input
          type="number"
          name="income"
          placeholder="💰 Average Area Income"
          value={formData.income}
          onChange={handleChange}
          className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37] focus:ring-2 focus:ring-[#EFE4D8]"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="🏡 Average Area House Age"
          value={formData.age}
          onChange={handleChange}
          className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37] focus:ring-2 focus:ring-[#EFE4D8]"
          required
        />

        <input
          type="number"
          name="rooms"
          placeholder="🛏 Average Number of Rooms"
          value={formData.rooms}
          onChange={handleChange}
          className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37] focus:ring-2 focus:ring-[#EFE4D8]"
          required
        />

        <input
          type="number"
          name="bedrooms"
          placeholder="🚪 Average Number of Bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37] focus:ring-2 focus:ring-[#EFE4D8]"
          required
        />

        <input
          type="number"
          name="population"
          placeholder="👥 Area Population"
          value={formData.population}
          onChange={handleChange}
          className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37] focus:ring-2 focus:ring-[#EFE4D8]"
          required
        />

        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="rounded-2xl border border-[#E8DDD4] bg-white p-4 outline-none transition focus:border-[#6F4E37] focus:ring-2 focus:ring-[#EFE4D8]"
        >
          {models.map((model) => (
            <option
              key={model}
              value={model}
            >
              {model}
            </option>
          ))}
        </select>

      </div>

      <div className="space-y-4">

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-[#6F4E37] py-4 text-lg font-bold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Predicting..." : "⚡ Predict Price"}
        </button>

        {prediction && (
          <button
            type="button"
            onClick={handleCompare}
            className="w-full rounded-2xl border-2 border-[#6F4E37] bg-[#FCFAF8] py-4 text-lg font-semibold text-[#6F4E37] transition hover:bg-[#EFE4D8]"
          >
            📊 Compare All 8 Models
          </button>
        )}

      </div>

    </form>
  );
}