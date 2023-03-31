"use client";
import { useState } from "react";
import PostCard from "./PostCard";
import { Post } from "@/service/posts";
import PostGrid from "./PostGrid";

type props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = "All Posts";
export default function FilteredPosts({ posts, categories }: props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section>
      <nav>
        {categories.map((category) => {
          <button>{category}</button>;
        })}
      </nav>
      <PostGrid posts={filtered} />
    </section>
  );
}
