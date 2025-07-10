from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .schemas import ContactForm
from .email_service import send_email

app = FastAPI()

@app.post("/send-email")
def handle_email(form: ContactForm):
    try:
        send_email(form)
        return {"message": "Email enviado com sucesso"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao enviar o email: {str(e)}")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)