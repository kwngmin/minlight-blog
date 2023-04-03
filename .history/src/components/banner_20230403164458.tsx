type BannerData = {
  notice: string;
  state: "success" | "error";
};
export default function Banner({
  banner: { notice, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success" ? "1" : "-2";
  return <p>{`${isSuccess} ${notice}`}</p>;
}
