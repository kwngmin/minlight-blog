import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, prev, next } = post;
  return (
    <div className="px-0">
      <article className="rounded-xl overflow-hidden">
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={760}
          height={400}
          className="w-full max-h-60 object-cover"
        />
        <PostContent post={post} />
        <section className="flex flex-col lg:flex-row">
          {prev && <AdjacentPostCard post={prev} type={"prev"} />}
          {next && <AdjacentPostCard post={next} type={"next"} />}
        </section>
      </article>
    </div>
  );
}
