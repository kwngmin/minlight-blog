import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import CarouselPosts from "@/components/CarouselPosts";

export default function HomePage() {
  return (
    <div>
      <section className="max-w-screen-lg mx-auto">
        <Hero />
        {/* @ts-expect-error Async Server Component */}
        <FeaturedPosts />
        {/* @ts-expect-error Async Server Component */}
        <CarouselPosts />
      </section>
    </div>
  );
}
