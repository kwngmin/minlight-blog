"use client";
import { useState } from "react";
import PostCard from "./PostCard";
import { Post } from "@/service/posts";

type props = {
  posts: Post[];
  categories: string[];
};
const ALL_POST = "All Posts";
export default function FilteredPosts({ posts, categories }: props) {
  const [filter, setFilter] = useState(ALL_POSTS);
  return (
    <section>
      <nav>
        {categories.map((category) => {
          <button>{category}</button>;
        })}
      </nav>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {posts
          .filter((post) => post.category === filter)
          .map((post) => (
            <li key={post.path}>
              <PostCard post={post} />
            </li>
          ))}
      </ul>
    </section>
  );
}
