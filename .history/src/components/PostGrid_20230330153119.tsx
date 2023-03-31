import { Post } from "@/service/posts";
type props = {
  posts: Post[];
};
export default function PostGrid({ posts }: props) {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <h1>title</h1>
        </li>
      ))}
    </ul>
  );
}

// title: string;
// description: string;
// date: Date;
// category: string;
// path: string;
// featured: boolean;
