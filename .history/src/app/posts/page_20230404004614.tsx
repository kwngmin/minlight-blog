import FilteredPosts from "@/components/FilteredPosts";
import { getAllPosts } from "@/service/posts";

export const metadata = {
  title: {
    default: "Posts",
    template: "Kwngmin's All Posts",
  },
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [
    "All Posts",
    ...new Set(posts.map((post) => post.category)),
  ];
  return <FilteredPosts posts={posts} categories={categories} />;
}
