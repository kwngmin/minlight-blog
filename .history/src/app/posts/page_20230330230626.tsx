import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [
    "All Posts",
    ...new Set(posts.map((post) => post.category)),
  ];
  return <></>;
}
