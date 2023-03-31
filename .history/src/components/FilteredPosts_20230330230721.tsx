"use client";
import { useState } from "react";

export default function FilteredPosts() {
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
