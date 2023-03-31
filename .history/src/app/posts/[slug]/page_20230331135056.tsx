type Props = {
  params: React.ReactNode;
};
export default function SlugPage({ params }: Props) {
  const path = params;
  return <p>{path}</p>;
}
