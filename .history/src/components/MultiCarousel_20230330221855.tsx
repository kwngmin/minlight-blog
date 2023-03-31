"use client";
import { Post } from "@/service/posts";
import { Children } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type props = {
  posts: Post[];
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function MultiCarousel({ children }: props) {
  return (
    <Carousel responsive={responsive} infinite autoPlay itemClass="m-2">
      {Children}
      {/* {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))} */}
    </Carousel>
  );
}
