"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type props = {
  children: React.ReactNode;
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
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
      className="bg-zinc-100 border border-zinc-200 my-4 pt-2 pb-6 rounded-xl"
    >
      {children}
    </Carousel>
  );
}
