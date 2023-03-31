type Props = {
  params: string;
};
export default function SlugPage({ params }: Props) {
  return <p>{params}</p>;
}
