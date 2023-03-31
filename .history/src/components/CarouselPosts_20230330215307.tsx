import { Post } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type props = {
  posts: Post[];
};
export default function CarouselPosts({ posts }: props) {
  return (
    <Carousel responsive={responsive}>
      {posts.map((post) => (
        <div key={post.path}>
          <PostCard post={post} />
        </div>
      ))}
    </Carousel>
  );
}
