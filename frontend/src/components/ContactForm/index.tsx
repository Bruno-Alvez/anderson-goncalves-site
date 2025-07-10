import { useState } from 'react'
import * as S from './styles'
import api from '../../services/api'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [emailError, setEmailError] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      setEmailError(isValid ? '' : 'Digite um e-mail válido')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (emailError) return

    setStatus('loading')
    setStatusMessage('Enviando mensagem...')

    try {
      const response = await api.post('/send-email', formData)

      if (response.status === 200) {
        setStatus('success')
        setStatusMessage('Mensagem enviada com sucesso!')
        setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' })
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Ocorreu um erro ao enviar. Tente novamente.')
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
              id="first_name"
              name="first_name"
              placeholder="Seu nome"
              required
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="sobrenome"><S.Required>*</S.Required> Sobrenome</label>
            <S.Input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Seu sobrenome"
              required
              value={formData.last_name}
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
              value={formData.email}
              onChange={handleChange}
            />
            {emailError && <S.Error>{emailError}</S.Error>}
          </div>
          <div>
            <label htmlFor="telefone"><S.Required>*</S.Required> Telefone</label>
            <S.MaskedInput
              mask="(99) 99999-9999"
              id="phone"
              name="phone"
              placeholder="(11) 99999-9999"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </S.InputGroup>

        <S.TextAreaWrapper>
          <label htmlFor="mensagem"><S.Required>*</S.Required> Mensagem</label>
          <S.TextArea
            id="message"
            name="message"
            placeholder="Digite sua mensagem..."
            maxLength={300}
            required
            value={formData.message}
            onChange={handleChange}
          />
        </S.TextAreaWrapper>

        <S.RequiredInfo>* indica um campo obrigatório</S.RequiredInfo>

        <S.Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
        </S.Button>

        {status !== 'idle' && (
          <S.Feedback status={status}>{statusMessage}</S.Feedback>
        )}
      </S.Form>
    </S.Section>
  )
}

export default ContactForm
