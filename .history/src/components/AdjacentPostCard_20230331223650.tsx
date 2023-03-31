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
    <Link href={`/${path}`} className="w-full relative max-h-40 bg-black">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={360}
        height={120}
        className="w-full opacity-40"
      />
      <div className="absolute">
        {type === "prev" && <span>Previouse</span>}
        {type === "next" && <span>Next</span>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
