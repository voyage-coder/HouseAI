import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, Brain, BarChart3, BookOpen, Info } from "lucide-react";
import { motion } from "framer-motion";
import { HousePlus } from "lucide-react";

const links = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Predict",
    path: "/predict",
    icon: Brain,
  },
  {
    name: "Compare",
    path: "/compare",
    icon: BarChart3,
  },
  {
    name: "Learn",
    path: "/learn",
    icon: BookOpen,
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DDD4] bg-[#FCFAF8]/90 backdrop-blur-lg">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: -8, scale: 1.08 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
          >
            <HousePlus
                size={42}
                className="text-[#6F4E37]"
            />
          </motion.div>

          <div>
            <h1 className="text-2xl font-extrabold text-[#3A2A20]">
              HouseAI
            </h1>

            <p className="text-xs text-[#7A6A5F]">
              Machine Learning Regression Studio
            </p>
          </div>
        </NavLink>

        {/* Desktop */}

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-5 py-2 transition-all duration-300 ${
                    isActive
                      ? "bg-[#6F4E37] text-white shadow-md"
                      : "text-[#6F4E37] hover:bg-[#EFE4D8]"
                  }`
                }
              >
                <Icon size={18} />
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl bg-[#EFE4D8] p-2 text-[#6F4E37] md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-[#E8DDD4] bg-[#FCFAF8] md:hidden"
        >
          <div className="flex flex-col gap-2 px-5 py-5">

            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                      isActive
                        ? "bg-[#6F4E37] text-white"
                        : "text-[#6F4E37] hover:bg-[#EFE4D8]"
                    }`
                  }
                >
                  <Icon size={18} />
                  {link.name}
                </NavLink>
              );
            })}

          </div>
        </motion.div>
      )}
    </header>
  );
}