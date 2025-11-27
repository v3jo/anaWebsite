import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import CustomArrow from './CustomArrow'
import ServiciosSection from './ServiciosSection'
import ReferenciasSection from './ReferenciasSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <ServiciosSection></ServiciosSection>
    <ReferenciasSection></ReferenciasSection>
    <AboutSection></AboutSection>
    <ContactSection></ContactSection>
    <FooterSection/>
    </>
  )
}

export default App
