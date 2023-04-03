import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  if (!bodySchema.isValidSync(req.body)) {
    return new Response("유효하지 않은 포맷", { status: 400 });
  }
  return sendEmail(req.body) //
    .then(
      () =>
        new Response(
          JSON.stringify({ message: "메일을 성공적으로 발송했습니다." }),
          { status: 200 }
        )
    )
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify(
          { message: "메일 발송에 실패하였습니다." },
          { status: 500 }
        )
      );
    });
}
