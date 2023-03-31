import { getPostData } from "@/service/posts";
import path from "path";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const { title, description, date, category, featured, content } =
    await getPostData(slug);
  return (
    <article>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </article>
  );
}
