type BannerData = {
  state: "success" | "error";
  message: string;
};
export default function banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  return <p></p>;
}
