import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import CarouselPosts from "@/components/CarouselPosts";

export default function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts prioty />
    </section>
  );
}
