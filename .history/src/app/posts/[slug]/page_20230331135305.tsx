type Props = {
  // params: React.ReactNode;
  params: string;
};
export default function SlugPage({ params: { slug } }: Props) {
  // const path = params;
  console.log(slug);
  return <p>123</p>;
}
