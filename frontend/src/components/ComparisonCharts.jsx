import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ComparisonCharts({ data }) {
  if (!data || data.length === 0) return null;

  const chartData = data.map((item) => ({
    model: item.model.replace(" Regression", ""),
    R2: Number((item.metrics.r2 * 100).toFixed(2)),
    MAE: Number(item.metrics.mae.toFixed(0)),
    RMSE: Number(item.metrics.rmse.toFixed(0)),
  }));

  return (
    <div className="space-y-10">

      {/* R2 */}

      <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8">

        <h2 className="mb-8 text-3xl font-black text-[#3A2A20]">
          R² Score Comparison
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="model" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="R2"
              fill="#6F4E37"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* MAE */}

      <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8">

        <h2 className="mb-8 text-3xl font-black text-[#3A2A20]">
          MAE Comparison
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="model" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="MAE"
              fill="#9D7658"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* RMSE */}

      <div className="rounded-[32px] border border-[#E8DDD4] bg-[#F6F2EC] p-8">

        <h2 className="mb-8 text-3xl font-black text-[#3A2A20]">
          RMSE Comparison
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="model" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="RMSE"
              fill="#B38B67"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}