// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import HeaderNav from './components/HeaderNav';
// import Features from './pages/Features';
// import Hero from './pages/Hero';
// import Landing from './pages/Landing';
// import Project from './pages/Project';
// import Choose from './pages/Choose';
// import People from './pages/People';
// import Meet from './pages/Meet';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import FullProject from './pages/FullProject';
// import ProjectDetails from './components/ProjectDetails';
// import Project_details from './pages/Project_details';
// // import ProjectDetails from './pages/ProjectDetails';

// const ExteriorPortfolio = () => (
//   <div className="pt-32 text-center text-2xl">
//     Exterior Portfolio Page Content Under Construction
//   </div>
// );

// const InteriorPortfolio = () => (
//   <div className="pt-32 text-center text-2xl">
//     Interior Portfolio Page Content Under Construction
//   </div>
// );

// const MainLandingPage = () => (
//   <>
//     <div id="top" />
//     <Hero />
//     <div id="about" className="scroll-mt-0">
//       <About />
//     </div>
//     <div id="services" className="scroll-mt-0">
//       <Landing />
//     </div>
//     <Features />
//     <div id="project" className="scroll-mt-0">
//       <Project />
//     </div>
//     <Meet />
//     <Choose />
//     <div id="who-we-are" className="scroll-mt-0">
//       <People />
//     </div>
//     <div id="contact" className="scroll-mt-0">
//       <Contact />
//     </div>
//     {/* <Project_details/> */}
//   </>
// );

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Floating header stays up top independently */}
//       <HeaderNav />

//       {/* Main sticky base layout navigation */}
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<MainLandingPage />} />
//         <Route path="/projects" element={<FullProject />} />
//         <Route path="/project/:id" element={<ProjectDetails />} />
//         <Route path="/exterior-portfolio" element={<ExteriorPortfolio />} />
//         <Route path="/interior-portfolio" element={<InteriorPortfolio />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


























import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeaderNav from './components/HeaderNav';
import Features from './pages/Features';
import Hero from './pages/Hero';
import Landing from './pages/Landing';
import Project from './pages/Project';
import Choose from './pages/Choose';
import People from './pages/People';
import Meet from './pages/Meet';
import About from './pages/About';
import Contact from './pages/Contact';
import FullProject from './pages/FullProject';
import ProjectDetails from './components/ProjectDetails';

const ExteriorPortfolio = () => (
  <div className="pt-32 text-center text-2xl">
    Exterior Portfolio Page Content Under Construction
  </div>
);

const InteriorPortfolio = () => (
  <div className="pt-32 text-center text-2xl">
    Interior Portfolio Page Content Under Construction
  </div>
);

const MainLandingPage = () => (
  <>
    <div id="top" />
    <Hero />
    <div id="about" className="scroll-mt-0">
      <About />
    </div>
    <div id="services" className="scroll-mt-0">
      <Landing />
    </div>
    <Features />
    <div id="project" className="scroll-mt-0">
      <Project />
    </div>
    <Meet />
    <Choose />
    <div id="who-we-are" className="scroll-mt-0">
      <People />
    </div>
    <div id="contact" className="scroll-mt-0">
      <Contact />
    </div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Navbar />

      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/projects" element={<FullProject />} />
        {/* Route set to /projects/:id */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/exterior-portfolio" element={<ExteriorPortfolio />} />
        <Route path="/interior-portfolio" element={<InteriorPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;