"use client";
import { useState } from "react";
import PostCard from "./PostCard";
import { Post } from "@/service/posts";

type props = {
  posts: Post[];
  categories: string[];
};
export default function FilteredPosts({ posts, categories }: props) {
  const [category, setCategory] = useState("All Posts");
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
