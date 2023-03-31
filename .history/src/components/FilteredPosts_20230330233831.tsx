"use client";
import { useState } from "react";
import { Post } from "@/service/posts";
import PostGrid from "./PostGrid";
import Categories from "./Categories";

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
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <PostGrid posts={filtered} />
    </section>
  );
}
