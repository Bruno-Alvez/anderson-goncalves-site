// src/App.tsx
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import * as S from './components/SocialDivider/styles'
import SocialDivider from './components/SocialDivider'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <S.OverlapWrapper>
        <SocialDivider />
      </S.OverlapWrapper>
    </>
  )
}

export default App
