import MarkDownViewer from "@/components/MarkDownViewer";
import { PostData } from "@/service/posts";
import Image from "next/image";
import avatar from "../../public/images/avatar-hands-up.png";
import { format, register } from "timeago.js";
import ko from "timeago.js/lib/lang/ko";
import { getLocaleDateString } from "@/service/posts";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, category, content } = post;
  register("ko", ko);
  // const dateData = date.toString().split("-");
  // const dateString = `${dateData[0]}년 ${dateData[1].replace(
  //   "0",
  //   ""
  // )}월 ${dateData[2].replace("0", "")}일`;

  return (
    <section className="border py-4 px-6 sm:p-8 md:px-16 md:pb-12 lg:px-32 lg:pb-16 lg:pt-8">
      <span className="bg-slate-200 text-slate-500 px-2 py-1 rounded-sm">
        {category}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mt-4">{title}</h1>
      <h3 className="text-lg md:text-xl text-black/70 mt-1 lg:mt-2">
        {description}
      </h3>
      <div className="flex items-center pt-4 gap-2 text-black/50 text-sm">
        <div className="rounded-full overflow-hidden w-6 bg-zinc-400">
          <Image src={avatar} alt="avatar" width={120} height={120} />
        </div>
        <span>Kwngmin</span>·<span className=""></span>
        <span className="">({format(date.toString(), "ko")})</span>
      </div>
      <div className="border-b my-6 md:my-8 lg:my-12" />
      <MarkDownViewer content={content} />
    </section>
  );
}
