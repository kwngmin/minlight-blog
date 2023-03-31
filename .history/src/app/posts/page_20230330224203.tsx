import { getAllPosts } from "@/service/posts";

export default function PostsPage() {
  const posts = getAllPosts();
  return <p>hello</p>;
}
