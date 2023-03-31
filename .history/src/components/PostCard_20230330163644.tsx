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
      <article className="rounded-lg overflow-hidden shadow-md hover:shadow-xl mt-3">
        <Image
          src={`/images/posts/${path}.png`}
          alt={path}
          width={560}
          height={200}
        />
        <div className="p-3">
          <div className="flex justify-between">
            <span>{category}</span>
            <time className="text-black/40">{date.toString()}</time>
          </div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </article>
    </Link>
  );
}

// title: string;
// description: string;
// date: Date;
// category: string;
// path: string;
// featured: boolean;
