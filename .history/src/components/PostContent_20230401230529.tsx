import MarkDownViewer from "@/components/MarkDownViewer";
import { PostData } from "@/service/posts";
import Image from "next/image";
import avatar from "../../public/images/avatar-hands-up.png";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, category, path, content } = post;
  return (
    <section className="border p-8 md:px-16 md:py-12 lg:px-32 lg:py-16">
      <span className="bg-slate-200 text-slate-500 px-2 py-1 rounded-sm">
        {category}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mt-4">{title}</h1>
      <h3 className="text-lg md:text-xl text-black/70 mt-2">{description}</h3>
      <div className="flex items-center pt-4 gap-2 text-black/60">
        <div className="rounded-full overflow-hidden w-8 bg-zinc-300">
          <Image src={avatar} alt="avatar" width={120} height={120} />
        </div>
        <span>Kwngmin</span>·
        <span className="">
          {date.toLocaleString("ko-KR", { timeZone: "UTC" })}
        </span>
      </div>
      <div className="border-b my-8 md:my-12 lg:my-16" />
      <MarkDownViewer content={content} />
    </section>
  );
}
