import * as S from './styles'
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

const SocialDivider = () => {
  return (
    <S.Container>
      <S.Line />
      <S.IconsWrapper>
        <S.IconLink href="https://wa.me/5511999999999" target="_blank" aria-label="WhatsApp">
          <FaWhatsapp />
        </S.IconLink>
        <S.IconLink href="https://instagram.com/seu_usuario" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </S.IconLink>
        <S.IconLink href="https://facebook.com/seu_usuario" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </S.IconLink>
        <S.IconLink href="mailto:contato@andersongoncalves.com" target="_blank" aria-label="Email">
          <FaEnvelope />
        </S.IconLink>
      </S.IconsWrapper>
      <S.Line />
    </S.Container>
  )
}

export default SocialDivider
