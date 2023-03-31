import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const filteredPosts = new Set(posts);
  console.log(filteredPosts);
  return (
    <section>
      <nav></nav>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {posts.map((post) => (
          <li key={post.path}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
