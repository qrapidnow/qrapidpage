import "./App.css";
import Footer from "./Component/Footer/Footer";
import Mid from "./Component/Mid/Mid";
import Navbar from "./Component/Navbar";
import Partner from "./Component/Partner/Partner";
import Reward from "./Component/Reward/Reward";
import Demo from "./Demo/Demo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./New/About";
import New from "./New/New";
import Contact from "./New/Contact";
import Faq from "./New/Faq";

import Policy from "./New/Policy";
import Terms from "./New/Terms";
import Career from "./New/Career";
import Price from "./Demo/Price";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Mid />
      <Partner />
      <Reward />
      <Footer />
    </>
  );
}

function DemoLayout() {
  return (
    <>
      <Demo />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/demo" element={<DemoLayout />} />
        <Route path="/about" element={<New />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/term" element={<Terms />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Price" element={<Price />} />
      </Routes>
    </Router>
  );
}

export default App;
