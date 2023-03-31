import { getOtherPosts } from "@/service/posts";
import PostGrid from "./PostGrid";
export default async function OtherPosts() {
  const posts = await getOtherPosts();

  return (
    <section className="my-12">
      <h2 className="text-xl font-medium text-slate-600">You May Also Like</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
