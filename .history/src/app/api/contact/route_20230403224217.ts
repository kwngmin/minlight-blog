import * as yup from "yup";

const bodySchema = yup.object().shape;

export async function POST(request: Request) {
  return new Response("Hello, Next.js!");
}
