import * as S from './styles'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

const slides = [
  { image: '/images/hero1.jpeg', title: 'Transforme seu corpo', subtitle: 'Com disciplina e o plano certo' },
  { image: '/images/hero2.jpeg', title: 'Alcance seu limite', subtitle: 'Resultados reais com acompanhamento profissional' },
  { image: '/images/hero3.jpeg', title: 'Treine com excelência', subtitle: 'Método exclusivo de alta performance' },
  { image: '/images/hero4.jpeg', title: 'Saia da zona de Conforto', subtitle: 'A mudança começa dentro de você' },
]
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

 const [sliderRef, instanceRef] = useKeenSlider({
  loop: true,
  created(slider) {
    setInterval(() => {
      slider.next()
    }, 6000)
  },
  slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel)
  }
})

  return (
    <S.HeroSection id='hero'>
      <S.SliderWrapper ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <S.Slide key={index} className="keen-slider__slide" bg={slide.image}>
            <S.Overlay />
            <S.Content>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <S.Button href="#contact">Entrar em Contato</S.Button>
            </S.Content>
          </S.Slide>
        ))}
      </S.SliderWrapper>

      <S.ArrowLeft onClick={() => instanceRef.current?.prev()}>&lt;</S.ArrowLeft>
      <S.ArrowRight onClick={() => instanceRef.current?.next()}>&gt;</S.ArrowRight>
    </S.HeroSection>
  )
}

export default Hero