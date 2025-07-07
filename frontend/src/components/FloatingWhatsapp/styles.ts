// src/components/FloatingWhatsapp/styles.ts
import styled from 'styled-components'

export const FloatingButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  background-color: #25D366;
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0,0,0,0.25);
  font-size: 1.8rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1ebe5b;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    bottom: 16px;
    right: 16px;
  }
`
