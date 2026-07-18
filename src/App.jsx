import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeaderNav from './components/HeaderNav';
import Features from './pages/Features';
import Hero from './pages/Hero';
import Landing from './pages/Landing';
import Project from './pages/Project';
import Choose from './pages/Choose';
import  Exhibition  from './pages/Exhibition';
import People from './pages/People';
import Text from './pages/Meet';
import Footer from './pages/Footer';
import Meet from './pages/Meet';
import About from './pages/About';

const ExteriorPortfolio = () => <div className="pt-32 text-center text-2xl">Exterior Portfolio Page Content Under Construction</div>;
const InteriorPortfolio = () => <div className="pt-32 text-center text-2xl">Interior Portfolio Page Content Under Construction</div>;

const MainLandingPage = () => (
  <>
    <Hero />
    <About/>
    <Landing />
    <Features />
    <Project />
    {/* <Exhibition/> */}
    <Meet/>
    <Choose />
    <People/>
    <Footer/>
  </>
);

function App() {
  return (
    <BrowserRouter>
      {/* floating header stays up top independently now */}
      <HeaderNav /> 
      
      {/* main sticky base layout screen */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/exterior-portfolio" element={<ExteriorPortfolio />} />
        <Route path="/interior-portfolio" element={<InteriorPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;