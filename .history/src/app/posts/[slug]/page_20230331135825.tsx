import { readFile } from "fs/promises";
import path from "path";

type Props = {
  // params: React.ReactNode;
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  // const path = params;

  const filePath = path.join(process.cwd(), "data", "posts", { slug });
  // .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));

  console.log(slug);
  return <p>{readFile(filePath, "utf-8").then<Post[]>(JSON.parse)}</p>;
}
