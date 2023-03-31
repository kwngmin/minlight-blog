import { getPostData } from "@/service/posts";
import path from "path";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  console.log(post);
  return <p>{post.title}</p>;
}
