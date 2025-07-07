// src/App.tsx
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import SocialDivider from './components/SocialDivider'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <SocialDivider />
      
    </>
  )
}

export default App
