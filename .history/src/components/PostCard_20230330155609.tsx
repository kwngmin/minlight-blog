import { Post } from "@/service/posts";

type props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, date, category, path },
}: props) {
  return <></>;
}

// title: string;
// description: string;
// date: Date;
// category: string;
// path: string;
// featured: boolean;
