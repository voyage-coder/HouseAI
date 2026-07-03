import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  LineChart,
  Sparkles,
  ArrowRight,
  Database,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { HousePlus } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "8 Machine Learning Models",
    desc: "Compare Linear Regression, Ridge, Lasso, ElasticNet, Decision Tree, Random Forest, Gradient Boosting and XGBoost.",
  },
  {
    icon: BarChart3,
    title: "Model Comparison",
    desc: "Compare MAE, RMSE and R² scores of every regression model in one place.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendation",
    desc: "Automatically recommends the best model based on evaluation metrics.",
  },
];

const stats = [
  {
    value: "8",
    label: "Regression Models",
  },
  {
    value: "5",
    label: "Input Features",
  },
  {
    value: "91.8%",
    label: "Best R² Score",
  },
  {
    value: "100K+",
    label: "Housing Records",
  },
];

const models = [
  "Linear Regression",
  "Ridge",
  "Lasso",
  "ElasticNet",
  "Decision Tree",
  "Random Forest",
  "Gradient Boosting",
  "XGBoost",
];

export default function Home() {
  return (
    <div className="bg-[#FCFAF8]">

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-b-rose-950 text-5xl shadow-lg">
            <HousePlus
                size={42}
                className="text-[#6F4E37]"
            />
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-[#3A2A20] md:text-7xl">
            HouseAI
          </h1>

          <p className="mt-4 text-xl font-medium text-[#6F4E37]">
            Machine Learning Regression Studio
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#7A6A5F]">
            Predict house prices, compare multiple Machine Learning algorithms,
            visualize performance metrics and discover which model performs best
            for the USA Housing dataset.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/predict"
              className="rounded-2xl bg-[#6F4E37] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
            >
              Start Prediction
            </Link>

            <Link
              to="/compare"
              className="rounded-2xl border border-[#6F4E37] px-8 py-4 text-lg font-semibold text-[#6F4E37] transition hover:bg-[#EFE4D8]"
            >
              Compare Models
            </Link>

          </div>
        </motion.div>

      </section>

      {/* Stats */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={item.label}
              className="rounded-3xl border border-[#E8DDD4] bg-[#F6F2EC] p-8 text-center shadow-sm"
            >
              <h2 className="text-4xl font-black text-[#6F4E37]">
                {item.value}
              </h2>

              <p className="mt-3 text-[#7A6A5F]">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-black text-[#3A2A20]">
            Why HouseAI?
          </h2>

          <p className="mt-4 text-[#7A6A5F]">
            More than a house price predictor.
          </p>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                whileHover={{ y: -8 }}
                key={feature.title}
                className="rounded-3xl border border-[#E8DDD4] bg-[#F6F2EC] p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFE4D8]">
                  <Icon
                    size={30}
                    className="text-[#6F4E37]"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#3A2A20]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-[#7A6A5F]">
                  {feature.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* Models */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="rounded-[40px] border border-[#E8DDD4] bg-[#F6F2EC] p-10">

          <div className="flex items-center gap-3">

            <Cpu className="text-[#6F4E37]" />

            <h2 className="text-3xl font-black text-[#3A2A20]">
              Supported Regression Models
            </h2>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {models.map((model) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={model}
                className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5 font-semibold text-[#6F4E37]"
              >
                {model}
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Workflow */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="text-center text-4xl font-black text-[#3A2A20]">
          How It Works
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-4">

          <div className="rounded-3xl bg-[#F6F2EC] p-8">
            <Database className="text-[#6F4E37]" />
            <h3 className="mt-5 text-xl font-bold text-[#3A2A20]">
              Enter Features
            </h3>
            <p className="mt-3 text-[#7A6A5F]">
              Provide house details like income, rooms, age and population.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F6F2EC] p-8">
            <Brain className="text-[#6F4E37]" />
            <h3 className="mt-5 text-xl font-bold text-[#3A2A20]">
              Choose Model
            </h3>
            <p className="mt-3 text-[#7A6A5F]">
              Select any regression model or compare all models together.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F6F2EC] p-8">
            <LineChart className="text-[#6F4E37]" />
            <h3 className="mt-5 text-xl font-bold text-[#3A2A20]">
              Predict
            </h3>
            <p className="mt-3 text-[#7A6A5F]">
              Generate an estimated house price instantly.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F6F2EC] p-8">
            <ShieldCheck className="text-[#6F4E37]" />
            <h3 className="mt-5 text-xl font-bold text-[#3A2A20]">
              Analyze
            </h3>
            <p className="mt-3 text-[#7A6A5F]">
              Compare metrics and discover the recommended model.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#6F4E37] px-8 py-16 text-center">

          <h2 className="text-4xl font-black text-white">
            Ready to Explore Machine Learning?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#EFE4D8]">
            Predict property prices, compare models and understand why one
            algorithm performs better than another.
          </p>

          <Link
            to="/predict"
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#6F4E37] transition hover:scale-105"
          >
            Start Prediction
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </div>
  );
}