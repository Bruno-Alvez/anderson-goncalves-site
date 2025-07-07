import { FaWhatsapp } from 'react-icons/fa'
import * as S from './styles'

const FloatingWhatsapp = () => {
  return (
    <S.FloatingButton
      href="https://wa.me/5512997599002?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com Anderson Gonçalves no WhatsApp"
    >
      <FaWhatsapp />
    </S.FloatingButton>
  )
}

export default FloatingWhatsapp