import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  background-color: #0A192F;
  color: #E6F0FF;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 480px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    object-fit: cover;
  }
`

export const Image = styled.img``

export const TextWrapper = styled.div`
  flex: 1;
  min-width: 280px;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #E6F0FF;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #E6F0FF;
  text-align: justify;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`