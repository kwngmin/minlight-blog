import { Post } from "@/service/posts";
import PostCard from "./PostCard";
type props = {
  posts: Post[];
};
export default function PostGrid({ posts }: props) {
  return (
    <ul className="grid-cols-1">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
