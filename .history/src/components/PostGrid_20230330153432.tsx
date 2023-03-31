import { Post } from "@/service/posts";
type props = {
  posts: Post[];
};
export default function PostGrid({ posts }: props) {
  return (
    <ul>
      {posts.map(({ title, description, date, category, path }) => (
        <li key={path}>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <span>{date}</span>
          <span>{category}</span>
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
