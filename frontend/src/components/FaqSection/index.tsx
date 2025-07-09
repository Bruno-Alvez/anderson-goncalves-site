import { useState } from 'react'
import * as S from './styles'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

const faqs = [
  {
    question: 'Como funciona a consultoria?',
    answer:
      'Assim que iniciamos, você terá acesso a um aplicativo exclusivo onde seus treinos são montados de forma personalizada. Com base em uma avaliação funcional via fotos, criamos um plano sob medida. Resultados visíveis já no primeiro mês.'
  },
  {
    question: 'Como são feitas as correções?',
    answer:
      'Você terá acesso ao WhatsApp exclusivo para envio de dúvidas e vídeos. Receberá correções técnicas, ajustes na execução dos exercícios e suporte constante diretamente comigo.'
  },
  {
    question: 'Como faço para entrar no time?',
    answer:
      'Basta enviar uma mensagem contando por que deseja participar, como isso ajudaria você, e escolher o plano ideal. O próximo passo é seu!'
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <S.Section id="faq">
      <S.Title>PRINCIPAIS DÚVIDAS</S.Title>
      <S.AccordionWrapper>
        {faqs.map((faq, index) => (
          <S.AccordionItem key={index}>
            <S.Question onClick={() => toggle(index)}>
              {faq.question}
              {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </S.Question>
            {openIndex === index && <S.Answer>{faq.answer}</S.Answer>}
          </S.AccordionItem>
        ))}
      </S.AccordionWrapper>
    </S.Section>
  )
}

export default FAQSection