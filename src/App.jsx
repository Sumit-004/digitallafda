import React,{useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Services from './Pages/Services';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Team from './Pages/Team';
import About from './Pages/About';
import Client from './Pages/Client';
import Contact from './Pages/Contact';
import OurWork from './Pages/OurWork';
import Footer from './Components/Footer';
import up from './assets/svg/up-arrow.svg'


const App = () => {

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-client" element={<Client />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
      <Footer />
      <img src={up} onClick={scrollToTop} className='fixed md:bottom-10 bottom-7 md:right-10 right-5 md:w-13 w-10 cursor-pointer transition-all duration-300' alt="" />

    </div>
  )
}

export default App
