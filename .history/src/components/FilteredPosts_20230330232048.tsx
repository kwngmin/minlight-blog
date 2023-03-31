"use client";
import { useState } from "react";
import PostCard from "./PostCard";
import { Post } from "@/service/posts";

type props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = "All Posts";
export default function FilteredPosts({ posts, categories }: props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS ? posts : posts.filter((post) => post.selected);
  return (
    <section>
      <nav></nav>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {filtered.map((post) => (
          <li key={post.path}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
