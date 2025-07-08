import * as S from './styles'
import { motion } from 'framer-motion'

const questions = [
  'Como montar um treino eficiente para hipertrofia?',
  'Qual a importância da alimentação no resultado?',
  'É possível emagrecer treinando em casa?',
  'Suplementos realmente funcionam?'
]

const FAQSection = () => {
  return (
    <S.Container id='questions'>
      <S.Content>
        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? -150 : 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
          >
            <S.Question>{q}</S.Question>
          </motion.div>
        ))}
        <S.Answer>
          Todas essas dúvidas são comuns e fazem parte da jornada de transformação. Aqui, você terá acesso a estratégias comprovadas para alcançar seus objetivos com segurança, eficiência e resultados reais.
        </S.Answer>
      </S.Content>
    </S.Container>
  )
}

export default FAQSection
