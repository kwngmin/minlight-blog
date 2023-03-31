import { Post } from "@/service/posts";
import Link from "next/link";

type Props = {
  post: Post;
  type: "prev" | "next";
};

export default function AdjacentPostCard({ post: { path }, type }: Props) {
  return <Link href={`/${path}`}></Link>;
}
