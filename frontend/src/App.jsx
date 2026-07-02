import { useState } from "react";
import { Home, Brain, BarChart3 } from "lucide-react";
import PredictionForm from "./components/PredictionForm";
import PredictionCard from "./components/PredictionCard";
import { predictHousePrice } from "./services/api";

export default function App() {
  const [formData, setFormData] = useState({
    income: "",
    houseAge: "",
    rooms: "",
    bedrooms: "",
    population: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const fillSampleData = () => {
    setFormData({
      income: "65000",
      houseAge: "7",
      rooms: "6",
      bedrooms: "4",
      population: "35000",
    });
    setPrediction(null);
    setError("");
  };

  const resetForm = () => {
    setFormData({
      income: "",
      houseAge: "",
      rooms: "",
      bedrooms: "",
      population: "",
    });
    setPrediction(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const data = await predictHousePrice(formData);
      setPrediction(data.predicted_price);
    } catch {
      setError("Unable to connect to Flask server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F2EC]">
      <header className="border-b border-[#E8DDD4] bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#6F4E37] text-white">
              <Home size={24}/>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-[#3A2A20]">HouseAI</h1>
              <p className="text-[#7A6A5F]">AI Powered Property Valuation</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-[#6F4E37] font-medium">
            <span>Dashboard</span>
            <span>Analytics</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-[#E8DDD4] p-8">
          <h2 className="text-2xl font-bold text-[#3A2A20] mb-6">Property Details</h2>
          <PredictionForm
            formData={formData}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            fillSampleData={fillSampleData}
            resetForm={resetForm}
          />
          {error && (
            <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}
        </section>

        <aside className="space-y-6">
          <div className="bg-white rounded-3xl shadow-lg border border-[#E8DDD4] p-6">
            <div className="flex items-center gap-2 mb-5">
              <Brain className="text-[#6F4E37]"/>
              <h3 className="text-xl font-bold text-[#3A2A20]">Model Analytics</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between"><span>Algorithm</span><b>Linear Regression</b></div>
              <div className="flex justify-between"><span>R² Score</span><b className="text-green-700">0.918</b></div>
              <div className="flex justify-between"><span>Status</span><b className="text-[#6F4E37]">Ready</b></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-[#E8DDD4] p-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-[#6F4E37]"/>
              <h3 className="text-xl font-bold text-[#3A2A20]">Prediction</h3>
            </div>
            <PredictionCard prediction={prediction}/>
          </div>
        </aside>
      </main>
    </div>
  );
}
