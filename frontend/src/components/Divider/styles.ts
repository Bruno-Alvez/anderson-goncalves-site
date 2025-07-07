import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E6F0FF;
  padding: 0.75rem 0;
  overflow: hidden;
  z-index: 1;
  margin-top: 0px;
`

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #0A192F;
`

export const Initials = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 2px;
  padding: 0 2rem;
  background-color: #ffffff;
  color: #0A192F;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #1E3A8A;
  }
`