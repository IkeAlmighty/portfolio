import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";
import Directory from './pages/Directory.jsx';
import { Routes, Route } from 'react-router';

export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Directory />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
        </Routes>
    );
}