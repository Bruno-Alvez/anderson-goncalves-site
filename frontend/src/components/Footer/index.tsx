import * as S from './styles'
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.Socials>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="mailto:contato@andersongoncalves.com">
            <FaEnvelope />
          </a>
        </S.Socials>

        <S.Address>
          Avenida Exemplo, 1234 - São Paulo, SP
        </S.Address>

        <S.Copy>
          © 2025 Alves Developer. All rights reserved.
        </S.Copy>
      </S.Content>
    </S.Footer>
  )
}

export default Footer