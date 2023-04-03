type EmailData = {
  from: string;
  subject: string;
  message: string;
}
export async function sendEmail(email: EmailData) {
  const response = await fetch('/api/contact',{
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return (
  
  );
}

