type Props = {
  // params: React.ReactNode;
  params: string;
};
export default function SlugPage({ params }: Props) {
  // const path = params;
  console.log(params);
  return <p>{path}</p>;
}
