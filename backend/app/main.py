from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .schemas import ContactForm
from .email_service import send_email

app = FastAPI()

@app.post(
    "/send-email",
    status_code=200,
    summary="Send contact form email",
    description="Receives the contact form data and sends an email to the site administrator."
)
async def send_contact_email(form_data: ContactForm):
    try:
        send_email(form_data)
        return {"message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)