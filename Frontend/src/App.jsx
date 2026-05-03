import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import CodingProfiles from './pages/Coding_profiles';
import AcademicProfiles from './pages/Academic_profiles';
// import GithubProfiles from './pages/Github_profiles';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './App.css'
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState("projects");

  return (
      <div className="app-container">
        <Navbar setCurrentPage={setCurrentPage} />
        
        <div className = "content">
          {currentPage === "home" && <Home/>}
          {currentPage === "projects" && <Projects />}
          {currentPage === "coding-profiles" && <CodingProfiles />}
          {currentPage === "academic-profiles" && <AcademicProfiles />}
          {/* {currentPage === "github-profiles" && <GithubProfiles />} */}
          {currentPage === "contact" && <Contact />}
          {currentPage === "skills" && <Skills />}
        </div>
        <Footer/>
      </div>
  );
}

export default App;