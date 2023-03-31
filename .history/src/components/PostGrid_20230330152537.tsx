import { getAllPosts } from "@/service/posts";

export default async function PostGrid() {
  const posts = await getAllPosts();
  console.log(posts);
  return <></>;
}
