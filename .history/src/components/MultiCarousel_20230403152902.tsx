"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type props = {
  children: React.ReactNode;
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 465 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel({ children }: props) {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      itemClass="m-2"
      className="bg-zinc-50 border border-zinc-200 my-4 py-2 rounded-xl"
    >
      {children}
    </Carousel>
  );
}
