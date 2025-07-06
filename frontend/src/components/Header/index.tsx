import { useState } from 'react'
import * as S from './styles'

import logo from '../../assets/logo-site.png' // substitua pelo nome real do arquivo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Container>
      <S.Logo>
          <a href="#">
            <img src={logo} alt="Anderson Gonçalves Logo" />
          </a>
      </S.Logo>

      <S.Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </S.Hamburger>

      <S.Nav>
        <S.NavLink href="#about">Sobre Mim</S.NavLink>
        <S.NavLink href="#projects">Projetos</S.NavLink>
        <S.NavLink href="#testimonials">Depoimentos</S.NavLink>
        <S.NavLink href="#contact">Contato</S.NavLink>
      </S.Nav>

      {isOpen && (
        <S.MobileMenu>
          <S.NavLink href="#about" onClick={toggleMenu}>Sobre Mim</S.NavLink>
          <S.NavLink href="#projects" onClick={toggleMenu}>Projetos</S.NavLink>
          <S.NavLink href="#testimonials" onClick={toggleMenu}>Depoimentos</S.NavLink>
          <S.NavLink href="#contact" onClick={toggleMenu}>Contato</S.NavLink>
        </S.MobileMenu>
      )}
    </S.Container>
  )
}

export default Header
