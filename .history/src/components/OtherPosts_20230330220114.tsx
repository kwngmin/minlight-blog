// import PostGrid from "./PostGrid";
import { getNonFeaturedPosts } from "@/service/posts";
import CarouselPosts from "./CarouselPosts";
export default async function OtherPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold text-slate-600">
        You May Also Like
      </h2>
      {/* <PostGrid posts={posts} /> */}
    </section>
  );
}
