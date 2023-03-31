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
        <div className="flex items-center justify-between mb-4">
          <span className="bg-slate-200 text-slate-500 px-3 py-0.5 rounded-sm">
            {category}
          </span>
          <span className="text-black/50 text-sm px-2 py-0.5 ring ring-zinc-200 rounded-full">
            {date.toString()}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-1">
          {title}
        </h1>
        <h3 className="text-xl text-black/60">{description}</h3>
        <div className="h-8"></div>
        <MarkDownViewer content={content} />
      </section>
    </article>
  );
}
