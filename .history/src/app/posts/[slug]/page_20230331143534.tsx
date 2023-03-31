import { getPostData } from "@/service/posts";
import MarkDownViewer from "@/components/MarkDownViewer";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const { title, description, date, category, content } = await getPostData(
    slug
  );
  return (
    <article>
      <span>{category}</span>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <span>{date}</span>
      <MarkDownViewer>{content: string}</MarkDownViewer>
    </article>
  );
}
