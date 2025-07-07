// src/components/ContactForm/index.tsx

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData) // Aqui entrará a integração com FastAPI depois
  }

  return (
    <S.Section>
      <S.Title>ENTRE EM CONTATO</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <div>
            <label htmlFor="nome">Nome</label>
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
            <label htmlFor="sobrenome">Sobrenome</label>
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
            <label htmlFor="email">Email</label>
            <S.Input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
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
          <label htmlFor="mensagem">Mensagem</label>
          <S.TextArea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem..."
            maxLength={300}
            required
            onChange={handleChange}
          />
        </S.TextAreaWrapper>

        <S.Button type="submit">Enviar Mensagem</S.Button>
      </S.Form>
    </S.Section>
  )
}

export default ContactForm