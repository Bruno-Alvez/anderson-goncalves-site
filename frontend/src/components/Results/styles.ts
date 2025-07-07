import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  background-color: #0A192F;
  color: #E6F0FF;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;

  strong {
    color: #1E3A8A;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 1rem;
    gap: 1.5rem;
  }
`

export const Card = styled.div`
  background: rgba(17, 34, 64, 0.9);
  border-radius: 16px;
  padding: 0.5rem;
  backdrop-filter: blur(4px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.2), inset 0 0 6px rgba(255,255,255,0.02);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  scroll-snap-align: start;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    height: 320px;
    min-width: 85%;
  }
`

// Modal
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
    box-shadow: 0 0 30px rgba(255,255,255,0.1);
  }

  button {
    position: absolute;
    top: -15px;
    right: -15px;
    background-color: #FFFFFF;
    color: #0A192F;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    width: 36px;
    height: 36px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 10000;

    &:hover {
      background-color: #CBD5E1;
    }
  }
`