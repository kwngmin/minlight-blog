import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import OtherPosts from "@/components/OtherPosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <OtherPosts />
    </>
  );
}
