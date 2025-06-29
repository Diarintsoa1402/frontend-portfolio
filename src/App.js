import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectAdmin from './pages/ProjectAdmin';
import ContactAdmin from './pages/ContactAdmin';
import EducationExperience  from './components/EducationExperience';
import Services from './components/Services';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/projects" element={<ProjectAdmin />} />
            <Route path="/admin/contacts" element={<ContactAdmin />} />
            <Route path="/education-experience" element={<EducationExperience />} />
            <Route path="/services" element={<Services />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
