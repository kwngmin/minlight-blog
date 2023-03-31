import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
  type: "prev" | "next";
};

export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className="w-full relative max-h-40 bg-slate-700 group"
    >
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={360}
        height={120}
        className="w-full opacity-80 group-hover:opacity-0"
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 text-white ${
          type === "prev" && "left-1/4 -translate-x-1/4"
        } ${type === "next" && "text-right right-1/4 translate-x-1/4 "}`}
      >
        {type === "prev" && <span>Previouse</span>}
        {type === "next" && <span>Next</span>}
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="font-semibold">{description}</p>
      </div>
    </Link>
  );
}
