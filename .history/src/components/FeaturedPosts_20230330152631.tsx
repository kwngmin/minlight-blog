import PostGrid from "./PostGrid";

export default function FeaturedPosts() {
  const posts = await getAllPosts();
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostGrid />
    </section>
  );
}
