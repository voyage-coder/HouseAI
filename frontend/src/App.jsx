import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Compare from "./pages/Compare";
import Learn from "./pages/Learn";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8]">

      <Navbar />

      <main className="flex-1">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/predict"
            element={<Predict />}
          />

          <Route
            path="/compare"
            element={<Compare />}
          />

          <Route
            path="/learn"
            element={<Learn />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;