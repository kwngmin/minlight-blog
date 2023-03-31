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
        <div className="flex items-center justify-between border-b mb-6">
          <span className="bg-slate-200 text-slate-500 px-3 py-1 rounded-sm">
            {category}
          </span>
          <span className="text-black/40 font-medium text-sm">
            {date.toString()}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-1">
          {title}
        </h1>
        <h3 className="text-lg md:text-xl text-black/60">{description}</h3>
        <div className="h-12"></div>
        <MarkDownViewer content={content} />
      </section>
    </article>
  );
}
