import { Post } from "@/service/posts";
import Link from "next/link";

type props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, date, category, path },
}: props) {
  return (
    <Link href={/posts/`${path}`}>
      <h3>{title}</h3>
    </Link>
  );
}

// title: string;
// description: string;
// date: Date;
// category: string;
// path: string;
// featured: boolean;
