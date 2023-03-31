"use client";
import { Post } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from "./PostCard";

type props = {
  posts: Post[];
};
export default function MultiCarousel({ posts }: props) {
  return (
    <Carousel responsive={responsive}>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </Carousel>
  );
}
