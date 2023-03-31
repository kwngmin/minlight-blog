type Props = {
  params: string;
};
export default function SlugPage({ params }: Props) {
  const path = params;
  return <p>{path}</p>;
}
