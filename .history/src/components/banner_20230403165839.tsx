export type BannerData = {
  message: string;
  state: "success" | "error";
};
export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success" ? "1" : "-2";
  return <p className={`bg-gray-300 px-4 py-2`}>{`${isSuccess} ${message}`}</p>;
}
