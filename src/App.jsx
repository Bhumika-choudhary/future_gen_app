import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialIcon from "./components/SocialIcon";
import Home from "./components/Home";
import About from "./components/about";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navbar and SocialIcon should be visible on all pages */}
      <Navbar />
      <SocialIcon />

      {/* Routes will switch based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
