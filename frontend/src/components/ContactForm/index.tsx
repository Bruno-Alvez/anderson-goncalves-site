import { useState } from 'react'
import * as S from './styles'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })

  const [emailError, setEmailError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      setEmailError(isValid ? '' : 'Digite um e-mail válido')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailError) {
      console.log(formData) // Envio para FastAPI será aqui
    }
  }

  return (
    <S.Section id="contact">
      <S.Title>ENTRE EM CONTATO</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <div>
            <label htmlFor="nome"><S.Required>*</S.Required> Nome</label>
            <S.Input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="sobrenome"><S.Required>*</S.Required> Sobrenome</label>
            <S.Input
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Seu sobrenome"
              required
              onChange={handleChange}
            />
          </div>
        </S.InputGroup>

        <S.InputGroup>
          <div>
            <label htmlFor="email"><S.Required>*</S.Required> Email</label>
            <S.Input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              required
              onChange={handleChange}
            />
            {emailError && <S.Error>{emailError}</S.Error>}
          </div>
          <div>
            <label htmlFor="telefone"><S.Required>*</S.Required> Telefone</label>
            <S.MaskedInput
              mask="(99) 99999-9999"
              id="telefone"
              name="telefone"
              placeholder="(11) 99999-9999"
              required
              onChange={handleChange}
            />
          </div>
        </S.InputGroup>

        <S.TextAreaWrapper>
          <label htmlFor="mensagem"><S.Required>*</S.Required> Mensagem</label>
          <S.TextArea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem..."
            maxLength={300}
            required
            onChange={handleChange}
          />
        </S.TextAreaWrapper>

        <S.RequiredInfo>* indica um campo obrigatório</S.RequiredInfo>

        <S.Button type="submit">Enviar Mensagem</S.Button>
      </S.Form>
    </S.Section>
  )
}

export default ContactForm