import './App.css';
import Footer from './Component/Footer/Footer';
import Mid from './Component/Mid/Mid';
import Navbar from './Component/Navbar';
import Partner from './Component/Partner/Partner';
import Reward from './Component/Reward/Reward';
import Demo from './Demo/Demo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Navbar/>
      <Mid/>
      <Partner/>
      <Reward/>
      <Footer/>
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
      </Routes>
    </Router>
  );
}

export default App;
