type EmailData = {
  from: string;
  subject: string;
  message: string;
};
export async function sendEmail(email: EmailData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청을 실패하였습니다.");
  }
  return data;
}
