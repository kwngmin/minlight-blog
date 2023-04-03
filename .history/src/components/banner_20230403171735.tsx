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
  return (
    <div className="bg-red-100 px-4 py-2 rounded-lg mb-10">{`${isSuccess} ${message}`}</div>
  );
}
