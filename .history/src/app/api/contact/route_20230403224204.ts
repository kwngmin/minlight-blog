import * as yup from "yup";

const bodySchema = yup.object.arguments();

export async function POST(request: Request) {
  return new Response("Hello, Next.js!");
}
