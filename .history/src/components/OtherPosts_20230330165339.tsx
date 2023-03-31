import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";
export default async function OtherPosts() {
  return (
    <section className="my-4">
      <h2 className="text-xl font-semibold text-slate-600">Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
