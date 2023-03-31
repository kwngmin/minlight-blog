import { getAllPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostGrid Posts={posts} />
    </section>
  );
}
