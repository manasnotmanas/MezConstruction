
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import FAQs from './pages/FAQs';
import Process from './pages/Process';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Footer from './Footer';
import Career from './pages/Career';
import ApplyForm from './components/ApplyForm';
import Unauthorized from './components/Unautharized';
import UserPage from './components/UserPage';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/apply/:jobTitle" element={<ApplyForm />} />
          <Route path="/Unauthorized" element={<Unauthorized/>} />
          <Route path="/dues/:token" element={<UserPage />} />


        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
