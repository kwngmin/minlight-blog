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
      <article className="rounded-lg overflow-hidden shadow-md hover:shadow-xl mt-3 hover:ring-4 hover:ring-slate-300">
        <Image
          src={`/images/posts/${path}.png`}
          alt={path}
          width={240}
          height={160}
          className="w-full"
        />
        <div className="p-4">
          <div className="flex justify-between mb-2 items-center">
            <span className="bg-slate-200 px-2 text-slate-600 rounded-sm">
              {category}
            </span>
            <time className="text-black/40 text-sm">{date.toString()}</time>
          </div>
          <h3 className="font-medium text-lg truncate">{title}</h3>
          <p className="text-slate-600 truncate mb-2">{description}</p>
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
