import * as S from './styles'

const AboutSection = () => {
  return (
    <S.Section id='about'>
      <S.Container>
        <S.ImageWrapper>
          <S.Image src="/images/about1.jpeg" alt="Personal Anderson Gonçalves" />
        </S.ImageWrapper>
        <S.TextWrapper>
          <S.Title>QUEM É O PERSONAL ANDERSON GONÇALVES?</S.Title>
           <S.Text>
               Me chamo Anderson Gonçalves, Personal Trainer com 5 anos de experiência, especialista em estética feminina e posturologia, além de atuar com musculação do básico ao avançado.

               Moro no litoral norte de São Paulo e, ao longo da minha jornada, tive a oportunidade de transformar mais de 2 mil vidas femininas por meio de um método próprio, que une ciência do movimento, personalização e foco em resultados reais.

               Tenho um olhar técnico e cuidadoso para a postura, execução e adaptação de cada exercício, respeitando a individualidade e os objetivos de cada aluna. Com isso, desenvolvi o método #teamgoncalves, que entrega resultados visíveis em até 45 dias, sem fórmulas mágicas, mas com estratégia e constância.

               Acredito que o treino vai muito além do físico: é sobre autoconfiança, autocuidado e a conquista da sua melhor versão. E é exatamente isso que me move todos os dias.
            </S.Text>
        </S.TextWrapper>
      </S.Container>
    </S.Section>
  )
}

export default AboutSection
