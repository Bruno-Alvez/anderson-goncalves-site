import smtplib
from email.message import EmailMessage
from decouple import config
from .schemas import ContactForm

def send_email(data: ContactForm):
    msg = EmailMessage()
    msg['Subject'] = 'Novo Contato do Site'
    msg['From'] = config('EMAIL_FROM')
    msg['To'] = config('EMAIL_TO')
    msg.set_content(
        f"Nome: {data.first_name} {data.last_name}\n"
        f"Email: {data.email}\n"
        f"Telefone: {data.phone}\n\n"
        f"Mensagem:\n{data.message}"
    )

    with smtplib.SMTP(config('EMAIL_HOST'), 587) as smtp:
        smtp.starttls()
        smtp.login(config('EMAIL_USERNAME'), config('EMAIL_PASSWORD'))
        smtp.send_message(msg)
