import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(255, 255, 255);
  padding: 0.75rem 0;
  overflow: hidden;
  z-index:1;
  margin-top: 0px;
`

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #0A192F;
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 2rem;
  background-color:rgb(255, 255, 255);
  z-index: 2;
`

export const IconLink = styled.a`
  font-size: 1.3rem;
  color: #0A192F ;
  transition: all 0.3s ease;

  &:hover {
    color: #1E3A8A;
    transform: scale(1.1);
  }
`