import { getPostData } from "@/service/posts";
import path from "path";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const { title, description, date, category, featured, content } =
    await getPostData(slug);
  console.log(post);
  return (
    <article>
      <h2>{post.title}</h2>;
    </article>
  );
}
