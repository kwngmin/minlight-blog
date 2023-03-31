import { getPostData } from "@/service/posts";
import MarkDownViewer from "@/components/MarkDownViewer";
import Image from "next/image";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const { title, description, date, category, path, content } =
    await getPostData(slug);
  return (
    <article className="rounded-xl overflow-hidden">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={400}
        className="w-full max-h-60 object-cover"
      />
      <section className="bg-zinc-50 p-4 md:p-8 lg:px-16">
        <span>{category}</span>
        <span>{date.toString()}</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {title}
        </h1>
        <h3 className="text-lg text-black/60">{description}</h3>
        <div className="h-8"></div>
        <MarkDownViewer content={content} />
      </section>
    </article>
  );
}
