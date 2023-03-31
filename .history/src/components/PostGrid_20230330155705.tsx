import { Post } from "@/service/posts";
import PostCard from "./PostCard";
type props = {
  posts: Post[];
};
export default function PostGrid({ posts }: props) {
  return (
    <ul>
      {posts.map((post) => (
        <PostCard post<Post></Post>={post} />
      ))}
    </ul>
  );
}
