import { getPostData } from "@/service/posts";
import MarkDownViewer from "@/components/MarkDownViewer";
import Image from "next/image";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const { title, description, date, category, path, content } =
    await getPostData(slug);
  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={400}
      />
      <span>{category}</span>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <span>{date}</span>
      <MarkDownViewer content={content} />
    </article>
  );
}
