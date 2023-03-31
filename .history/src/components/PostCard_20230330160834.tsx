import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, date, category, path },
}: props) {
  return (
    <Link href={`/posts/${path}`}>
      <div>
        <Image src={`/images/posts/${path}.png`} alt={path}} width={300} height={200} />
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <time>{date.toString()}</time>
      </div>
    </Link>
  );
}

// title: string;
// description: string;
// date: Date;
// category: string;
// path: string;
// featured: boolean;
