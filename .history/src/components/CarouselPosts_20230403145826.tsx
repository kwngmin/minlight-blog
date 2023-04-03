import { getNonFeaturedPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="mt-12 relative">
      <h2 className="text-xl font-semibold text-slate-600">
        You May Also Like 👍
      </h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultiCarousel>
    </section>
  );
}
