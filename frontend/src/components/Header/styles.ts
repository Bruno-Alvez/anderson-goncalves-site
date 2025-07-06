import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: #0A192F;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img{
    height: 140px;
    object-fit: contain;
    margin-left: 16px;
    cursor: pointer;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-right: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.a`
  color: #FFFFFF;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #E6F0FF;
  }

  /* Optional underline effect on hover */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background-color: #1E3A8A;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`


export const Hamburger = styled.button`
  display: none;
  margin-right: 24px;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #FFFFFF;
    border-radius: 5px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #0A192F;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 1.2rem;
  }
`
