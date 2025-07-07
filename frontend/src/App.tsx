import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import SocialDivider from './components/SocialDivider'
import Hero from './components/Hero'
import FaqSection from './components/FaqSection'
import Result from './components/Results'
import InitialsDivider from './components/Divider'
import AboutSection from './components/AboutMe'

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
      
    </>
  )
}

export default App
