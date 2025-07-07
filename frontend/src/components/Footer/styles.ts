import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #020c1b;
  color: #e6f0ff;
  padding: 3rem 2rem;
  text-align: center;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`

export const Socials = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #e6f0ff;
    font-size: 1.8rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: #5ea9ff;
      transform: scale(1.2);
    }
  }
`

export const Address = styled.p`
  font-size: 1rem;
  color: #aebcd5;
`

export const Copy = styled.p`
  font-size: 0.9rem;
  color: #6c7a91;
  border-top: 1px solid #2c3e50;
  padding-top: 1rem;
  width: 100%;
  max-width: 400px;
`