import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HousePlus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#E8DDD4] bg-[#F6F2EC]">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl">
                <HousePlus
                    size={42}
                    className="text-[#6F4E37]"
                />
              </div>
                
              <div>

                <h2 className="text-2xl font-bold text-[#3A2A20]">
                  HouseAI
                </h2>

                <p className="text-sm text-[#7A6A5F]">
                  Machine Learning Regression Studio
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-[#7A6A5F]">
              HouseAI is an interactive machine learning platform for
              predicting house prices, comparing regression models and
              understanding model performance through visualizations.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-[#3A2A20]">
              Navigation
            </h3>

            <div className="space-y-3">

              <a
                href="/"
                className="block text-[#7A6A5F] hover:text-[#6F4E37]"
              >
                Home
              </a>

              <a
                href="/predict"
                className="block text-[#7A6A5F] hover:text-[#6F4E37]"
              >
                Predict
              </a>

              <a
                href="/compare"
                className="block text-[#7A6A5F] hover:text-[#6F4E37]"
              >
                Compare
              </a>

              <a
                href="/learn"
                className="block text-[#7A6A5F] hover:text-[#6F4E37]"
              >
                Learn
              </a>

              <a
                href="/about"
                className="block text-[#7A6A5F] hover:text-[#6F4E37]"
              >
                About
              </a>

            </div>

          </div>

          {/* Contact */}

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#3A2A20] mb-4">
                Connect
            </h3>

            <div className="flex items-center justify-center gap-6">
                <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#6F4E37] hover:scale-110 transition"
                >
                <FaGithub />
                </a>

                <a
                href="https://linkedin.com/in/YOUR_PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#6F4E37] hover:scale-110 transition"
                >
                <FaLinkedin />
                </a>

                <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="text-2xl text-[#6F4E37] hover:scale-110 transition"
                >
                <FaEnvelope />
                </a>
            </div>
            </div>

        </div>

        <div className="mt-12 border-t border-[#E8DDD4] pt-6">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-[#7A6A5F]">
            © {new Date().getFullYear()} HouseAI. Built with React, Flask & Machine Learning.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}