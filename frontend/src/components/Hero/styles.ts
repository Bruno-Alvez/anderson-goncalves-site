import styled from 'styled-components'

interface SlideProps {
  bg: string
}

export const HeroSection = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  font-family: 'Cinzel', serif;
`

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;

  .keen-slider__slide {
    transition: opacity 1s ease-in-out;
  }
`

export const Slide = styled.div<SlideProps>`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`

export const Content = styled.div`
  z-index: 2;
  text-align: center;
  color: #FFFFFF;
  padding: 0 1.5rem;
  max-width: 800px;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #E6F0FF;
    font-weight: 700;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    font-family: 'Lora', serif;
    color: #CBD5E1;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`

export const Button = styled.a`
  padding: 0.75rem 2rem;
  background-color: #1E3A8A;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0A192F;
    color: #E6F0FF;
  }
`

export const ArrowLeft = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background: none;
  border: none;
  color: #E6F0FF;
  z-index: 3;
  cursor: pointer;

  &:hover {
    color: #1E3A8A;
  }
`

export const ArrowRight = styled(ArrowLeft)`
  left: auto;
  right: 20px;
`