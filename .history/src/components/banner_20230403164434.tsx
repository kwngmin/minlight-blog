type BannerData = {
  state: "success" | "error";
  notice: string;
};
export default function Banner({
  banner: { notice, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success" ? "1" : "-2";
  return <p>{`${isSuccess} ${notice}`}</p>;
}
