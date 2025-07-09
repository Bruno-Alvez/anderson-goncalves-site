import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Section = styled.section`
  background-color: #0A192F;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  color: #E6F0FF;
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
`

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  label {
    color: #E6F0FF;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: #1E293B;
  color: #F1F5F9;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: border 0.3s;

  &::placeholder {
    color: #94A3B8;
  }

  &:focus {
    border-color: #3B82F6;
    outline: none;
  }
`

export const MaskedInput = styled(InputMask as React.ComponentType<any>)`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: #1E293B;
  color: #F1F5F9;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: border 0.3s;

  &::placeholder {
    color: #94A3B8;
  }

  &:focus {
    border-color: #3B82F6;
    outline: none;
  }
`

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #E6F0FF;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`

export const TextArea = styled.textarea`
  resize: none;
  min-height: 150px;
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  background-color: #1E293B;
  color: #F1F5F9;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: border 0.3s;

  &::placeholder {
    color: #94A3B8;
  }

  &:focus {
    border-color: #3B82F6;
    outline: none;
  }
`

export const Button = styled.button`
  align-self: flex-start;
  background-color: #3B82F6;
  color: #FFFFFF;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #2563EB;
    cursor: pointer;
  }
`

export const Error = styled.span`
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.4rem;
`

export const Required = styled.span`
  color: #EF4444;
  margin-right: 0.25rem;
`

export const RequiredInfo = styled.p`
  color: #CBD5E1;
  font-size: 0.9rem;
  margin-top: -1rem;
  font-style: italic;
`