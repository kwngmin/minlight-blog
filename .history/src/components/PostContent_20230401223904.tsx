import MarkDownViewer from "@/components/MarkDownViewer";
import { PostData } from "@/service/posts";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, category, path, content } = post;
  return (
    <section className="bg-zinc-50 p-4 md:p-16 lg:p-16">
      <span className="bg-slate-200 text-slate-500 px-2 py-1 rounded-sm">
        {category}
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
        {title}
      </h1>
      <h3 className="text-lg md:text-xl text-black/60">{description}</h3>
      <div className="flex items-center justify-between pb-6">
        <span className="text-slate-400 font-medium text-sm">
          {date.toString()}
        </span>
      </div>
      <MarkDownViewer content={content} />
    </section>
  );
}
