import { getAllPosts } from "@/service/posts";

export default function PostGrid() {
  const posts = await getAllPosts();
  console.log();
  return <></>;
}
