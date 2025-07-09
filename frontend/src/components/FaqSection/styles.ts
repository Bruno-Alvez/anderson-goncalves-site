import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  background-color: #0A192F;
  padding: 6rem 2rem 4rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const AccordionWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const AccordionItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #1e3a8a;
`

export const Question = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  color: #E6F0FF;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    transition: transform 0.3s;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`

export const Answer = styled.p`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  background-color: rgba(255, 255, 255, 0.03);
  color: #CFE5FF;
  border-top: 1px solid #1e3a8a;
`