import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import SocialDivider from './components/SocialDivider'
import Hero from './components/Hero'
import FaqSection from './components/FaqSection'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <SocialDivider />
      <FaqSection />
      
    </>
  )
}

export default App
