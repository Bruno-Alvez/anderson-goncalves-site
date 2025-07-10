from pydantic import BaseModel, EmailStr, Field

class ContactForm(BaseModel):
    first_name: str = Field(..., example="Bruno")
    last_name: str = Field(..., example="Alves")
    email: EmailStr = Field(..., example="bruno@example.com")
    phone: str = Field(..., example="+55 11 91234-5678")
    message: str = Field(..., example="Gostaria de saber mais sobre os seus serviços.")

    class Config:
        schema_extra = {
            "example": {
                "first_name": "Bruno",
                "last_name": "Alves",
                "email": "bruno@example.com",
                "phone": "+55 11 91234-5678",
                "message": "Olá, quero agendar uma avaliação."
            }
        }
