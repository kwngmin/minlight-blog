"use client";
import React, { Children } from "react";
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
      className="w-screen absolute l-0"
    >
      {children}
    </Carousel>
  );
}
