import { getPostData } from "@/service/posts";
import path from "path";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const PostData = await getPostData(slug);
  return <p>{PostData}</p>;
}
