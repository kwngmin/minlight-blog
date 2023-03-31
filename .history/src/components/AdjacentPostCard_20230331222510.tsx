import { Post } from "@/service/posts";
import { spawn } from "child_process";
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
      {type === "prev" && <span>Previouse</span>}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {type === "next" && <span>Next</span>}
    </Link>
  );
}
