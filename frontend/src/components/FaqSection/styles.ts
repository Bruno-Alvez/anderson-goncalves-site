import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: #0A192F;
  padding: 6rem 2rem 4rem;
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Question = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.08);
  border-left: 4px solid #38bdf8;
  padding: 0.75rem 1rem;
  border-radius: 6px;
`

export const Answer = styled.p`
  font-size: 1rem;
  margin-top: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 6px;
`