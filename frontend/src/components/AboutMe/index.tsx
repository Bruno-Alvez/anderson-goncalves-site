import * as S from './styles'

const AboutSection = () => {
  return (
    <S.Section>
      <S.Container>
        <S.ImageWrapper>
          <S.Image src="/images/about1.jpeg" alt="Personal Anderson Gonçalves" />
        </S.ImageWrapper>
        <S.TextWrapper>
          <S.Title>QUEM É O PERSONAL ANDERSON GONÇALVES?</S.Title>
           <S.Text>
               Anderson Gonçalves é um personal trainer especializado em performance, saúde e estética. 
               Com mais de uma década de experiência, desenvolveu um método exclusivo que une ciência do 
               treinamento, disciplina e motivação. Ele acredita que cada corpo carrega um potencial 
               único, e por isso seus treinos são 100% personalizados e acompanhados de perto.
             
               Fundador do movimento #TeamGoncalves, Anderson já transformou centenas de vidas com foco 
               em resultados reais, duradouros e seguros. Seu compromisso vai além do treino: ele promove 
               autoconfiança, educação corporal e estilo de vida saudável, sempre com ética, excelência e 
               proximidade com seus alunos. Com Anderson, o treino é só o começo de uma jornada de 
               transformação completa.
            </S.Text>
        </S.TextWrapper>
      </S.Container>
    </S.Section>
  )
}

export default AboutSection
