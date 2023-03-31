import { Post } from "@/service/posts";
import Image from 'next/image';
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
    <Link href={`/${path}`}>
        <Image src={`/images/posts/${path}.png` alt={title} width={360} height={120}}>
      {type === "prev" && <span>Previouse</span>}
      {type === "next" && <span>Next</span>}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
