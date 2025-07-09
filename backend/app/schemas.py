from pydantic import BaseModel, EmailStr

class ContactForm(BaseModel):
    nome: str
    sobrenome: str
    email: EmailStr
    telefone: str
    mensagem: str
