import { Post } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type props = {
  posts: Post[];
};
export default function MultiCarousel({ posts }: props) {
  return (
    <Carousel>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </Carousel>
  );
}
