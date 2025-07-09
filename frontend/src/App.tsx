import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import SocialDivider from './components/SocialDivider'
import Hero from './components/Hero'
import FaqSection from './components/FaqSection'
import Result from './components/Results'
import InitialsDivider from './components/Divider'
import AboutSection from './components/AboutMe'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingWhatsapp from './components/FloatingWhatsapp'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <SocialDivider />
      <FaqSection />
      <InitialsDivider />
      <Result />
      <InitialsDivider />
      <AboutSection />
      <InitialsDivider />
      <ContactForm />
      <InitialsDivider />
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}

export default App
