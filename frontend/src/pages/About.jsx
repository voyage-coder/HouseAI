import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function About() {
  const technologies = [
    "React",
    "Vite",
    "Tailwind CSS",
    "Jupyter Notebook",
    "Flask",
    "Python",
    "Scikit-Learn",
    "XGBoost",
    "Docker",
    "Git",
    "GitHub",
    "Render",
    "Vercel",
  ];

  const features = [
    "House Price Prediction",
    "8 Machine Learning Models",
    "Model Comparison Dashboard",
    "AI Recommendation System",
    "Performance Metrics",
    "Interactive UI",
    "REST API",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF8]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl font-black text-[#3A2A20]">
            About HouseAI
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#7A6A5F]">
            HouseAI is an end-to-end Machine Learning web application
            developed to predict house prices, compare multiple regression
            algorithms and understand the performance of each model through
            an interactive dashboard.
          </p>

        </div>

        {/* Overview */}

        <div className="mt-16 rounded-[36px] border border-[#E8DDD4] bg-[#F6F2EC] p-10">

          <h2 className="text-3xl font-black text-[#3A2A20]">
            Project Overview
          </h2>

          <p className="mt-6 leading-8 text-[#7A6A5F]">
            Unlike traditional Machine Learning projects that use only a
            single algorithm, HouseAI allows users to compare eight
            regression algorithms on the same housing dataset. Users can
            predict house prices, analyze model performance, compare
            predictions and identify the best-performing algorithm.
          </p>

        </div>

        {/* Tech Stack */}

        <div className="mt-12 rounded-[36px] border border-[#E8DDD4] bg-[#F6F2EC] p-10">

          <h2 className="text-3xl font-black text-[#3A2A20]">
            Technology Stack
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            {technologies.map((tech) => (

              <div
                key={tech}
                className="rounded-full border border-[#E8DDD4] bg-[#FCFAF8] px-6 py-3 font-semibold text-[#6F4E37]"
              >
                {tech}
              </div>

            ))}

          </div>

        </div>

        {/* Features */}

        <div className="mt-12 rounded-[36px] border border-[#E8DDD4] bg-[#F6F2EC] p-10">

          <h2 className="text-3xl font-black text-[#3A2A20]">
            Key Features
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {features.map((feature) => (

              <div
                key={feature}
                className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5"
              >
                <span className="font-semibold text-[#6F4E37]">
                  ✔ {feature}
                </span>
              </div>

            ))}

          </div>

        </div>

        {/* ML Pipeline */}

        <div className="mt-12 rounded-[36px] border border-[#E8DDD4] bg-[#F6F2EC] p-10">

          <h2 className="text-3xl font-black text-[#3A2A20]">
            Machine Learning Pipeline
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-6">

            <div className="rounded-2xl bg-[#FCFAF8] p-5 text-center border border-[#E8DDD4]">
              Dataset
            </div>

            <div className="rounded-2xl bg-[#FCFAF8] p-5 text-center border border-[#E8DDD4]">
              EDA
            </div>

            <div className="rounded-2xl bg-[#FCFAF8] p-5 text-center border border-[#E8DDD4]">
              Preprocessing
            </div>

            <div className="rounded-2xl bg-[#FCFAF8] p-5 text-center border border-[#E8DDD4]">
              Training
            </div>

            <div className="rounded-2xl bg-[#FCFAF8] p-5 text-center border border-[#E8DDD4]">
              Evaluation
            </div>

            <div className="rounded-2xl bg-[#6F4E37] p-5 text-center font-bold text-white">
              Deployment
            </div>

          </div>

        </div>

        {/* Models */}

        <div className="mt-12 rounded-[36px] border border-[#E8DDD4] bg-[#F6F2EC] p-10">

          <h2 className="text-3xl font-black text-[#3A2A20]">
            Regression Models Used
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Linear Regression",
              "Ridge",
              "Lasso",
              "ElasticNet",
              "Decision Tree",
              "Random Forest",
              "Gradient Boosting",
              "XGBoost",
            ].map((model) => (

              <div
                key={model}
                className="rounded-2xl border border-[#E8DDD4] bg-[#FCFAF8] p-5 text-center font-bold text-[#6F4E37]"
              >
                {model}
              </div>

            ))}

          </div>

        </div>

        {/* Dataset */}

        <div className="mt-12 rounded-[36px] border border-[#E8DDD4] bg-[#F6F2EC] p-10">

          <h2 className="text-3xl font-black text-[#3A2A20]">
            Dataset
          </h2>

          <p className="mt-6 leading-8 text-[#7A6A5F]">
            This application uses the Housing dataset consisting of
            approximately 5,000 housing records with five numerical input
            features and one target variable (Price). The dataset is
            commonly used for regression tasks and performance comparison
            of machine learning algorithms.
          </p>

        </div>

        {/* Developer */}

        <div className="mt-12 rounded-[36px] bg-[#6F4E37] p-10 text-center">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white text-6xl">
            👩‍💻
          </div>

          <h2 className="mt-6 text-4xl font-black text-white">
            Developed by Navya Sree
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#EFE4D8]">
            Computer Science Engineering Student passionate about Artificial
            Intelligence, Machine Learning and Full Stack Development.
            HouseAI was built as a to demonstrate
            practical Machine Learning engineering skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
                href="https://github.com/voyage-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-8 py-3 font-bold text-[#6F4E37] transition hover:scale-105"
            >
                GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/navyaksree-18d12/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#6F4E37]"
            >
                LinkedIn
            </a>

            </div>

        </div>

      </div>

    </div>
  );
}