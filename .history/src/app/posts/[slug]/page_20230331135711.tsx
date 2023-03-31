type Props = {
  // params: React.ReactNode;
  params: string;
};
export default aync function SlugPage({ params: { slug } }: Props) {
  // const path = params;

  const filePath = path.join(process.cwd(), "data", "posts", {slug});
    // .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));

  console.log(slug);
  const post = await 
  return <p>{readFile(filePath, "utf-8")
  .then<Post[]>(JSON.parse)}</p>;
}
