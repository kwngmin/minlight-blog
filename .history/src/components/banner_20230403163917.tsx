type BannerData = {
  state: "success" | "error";
  message: string;
};
export default function banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success" ? "1" : "-2";
  return <p>{`${isSuccess} ${message}`}</p>;
}
