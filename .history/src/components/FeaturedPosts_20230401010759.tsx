import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="w-full my-12">
      <h2 className="text-xl font-semibold text-slate-600">
        Featured Posts 🔥
      </h2>
      <PostGrid posts={posts} />
    </section>
  );
}
