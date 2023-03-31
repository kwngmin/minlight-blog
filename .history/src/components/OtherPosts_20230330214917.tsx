import { getOtherPosts } from "@/service/posts";
import PostGrid from "./PostGrid";
import CarouselPosts from "./CarouselPosts";
export default async function OtherPosts() {
  const posts = await getOtherPosts();

  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold text-slate-600">
        You May Also Like
      </h2>
      {/* <PostGrid posts={posts} /> */}
      <CarouselPosts posts={posts} />
    </section>
  );
}
