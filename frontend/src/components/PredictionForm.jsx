export default function PredictionForm({
  formData,
  loading,
  handleChange,
  handleSubmit,
  fillSampleData,
  resetForm,
}) {
  const inputStyle =
    "w-full rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] px-5 py-4 outline-none text-[#3A2A20] focus:ring-2 focus:ring-[#A2673F]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 font-semibold text-[#6F4E37]">Average Area Income</label>
        <input className={inputStyle} type="number" name="income" value={formData.income} onChange={handleChange} placeholder="65000"/>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-semibold text-[#6F4E37]">House Age</label>
          <input className={inputStyle} type="number" name="houseAge" value={formData.houseAge} onChange={handleChange} placeholder="7"/>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-[#6F4E37]">Rooms</label>
          <input className={inputStyle} type="number" name="rooms" value={formData.rooms} onChange={handleChange} placeholder="6"/>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-semibold text-[#6F4E37]">Bedrooms</label>
          <input className={inputStyle} type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="4"/>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-[#6F4E37]">Population</label>
          <input className={inputStyle} type="number" name="population" value={formData.population} onChange={handleChange} placeholder="35000"/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-[#6F4E37] text-white py-4 font-semibold hover:bg-[#5A3E2D] transition"
        >
          {loading ? "Predicting..." : "Predict Price"}
        </button>

        <button
          type="button"
          onClick={fillSampleData}
          className="rounded-2xl bg-[#EFE4D8] text-[#6F4E37] py-4 font-semibold hover:bg-[#E6D7C8] transition"
        >
          Sample Data
        </button>

        <button
          type="button"
          onClick={resetForm}
          className="rounded-2xl border border-[#D8C9BD] bg-white text-[#6F4E37] py-4 font-semibold hover:bg-[#F7F2EC] transition"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
