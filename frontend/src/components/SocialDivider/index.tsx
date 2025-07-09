import * as S from './styles'
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

const SocialDivider = () => {
  return (
    <S.Container>
      <S.Line />
      <S.IconsWrapper>
        <S.IconLink href="https://wa.me/5512997599002?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21" target="_blank" aria-label="WhatsApp">
          <FaWhatsapp />
        </S.IconLink>
        <S.IconLink href="https://www.instagram.com/goncalvespersonal_?igsh=MWx4dzA5cnJmdGd5Ng==" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </S.IconLink>
        <S.IconLink href="https://facebook.com/seu_usuario" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </S.IconLink>
        <S.IconLink href="mailto:personalgoncalves11@gmail.com" target="_blank" aria-label="Email">
          <FaEnvelope />
        </S.IconLink>
      </S.IconsWrapper>
      <S.Line />
    </S.Container>
  )
}

export default SocialDivider
