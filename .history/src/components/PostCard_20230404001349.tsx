import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, date, category, path },
}: props) {
  const dateData = date.toString().split("-");
  const dateString = `${dateData[0]}년 ${dateData[1].replace(
    "0",
    ""
  )}월 ${dateData[2].replace("0", "")}일`;
  return (
    <Link href={`/posts/${path}`}>
      <article className="bg-white rounded-lg overflow-hidden shadow-md lg:hover:shadow-xl my-3 lg:hover:ring-4 lg:hover:ring-slate-400">
        <Image
          src={`/images/posts/${path}.png`}
          alt={path}
          width={360}
          height={198}
          className="w-full"
        />
        <div className="p-4">
          <div className="flex justify-between mb-2 items-center">
            <span className="bg-slate-200 px-2 text-slate-600 rounded-sm">
              {category}
            </span>
            <time className="text-black/40 text-sm">{dateString}</time>
          </div>
          <h3 className="font-medium text-lg truncate">{title}</h3>
          <p className="text-slate-600 truncate mb-2">{description}</p>
        </div>
      </article>
    </Link>
  );
}