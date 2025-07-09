import * as S from './styles'
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.Socials>
          <a href="https://wa.me/5512997599002?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/goncalvespersonal_?igsh=MWx4dzA5cnJmdGd5Ng==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="mailto:personalgoncalves11@gmail.com">
            <FaEnvelope />
          </a>
        </S.Socials>

        <S.Address>
         Rua Amauri Teixeira Leite, 561 - São Sebastião, SP
        </S.Address>

        <S.Copy>
          © 2025 Alves Developer. All rights reserved.
        </S.Copy>
      </S.Content>
    </S.Footer>
  )
}

export default Footer