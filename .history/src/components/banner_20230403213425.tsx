import { BsSendCheck, BsSendX } from "react-icons/bs";
export type BannerData = {
  message: string;
  state: "success" | "error";
};
export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? (
    <BsSendCheck size={56} className={} />
  ) : (
    <BsSendX size={56} className={} />
  );
  const BANNER_ICON = "mr-2 mt-1";
  return (
    <div className="px-4 mb-6 rounded-lg flex flex-col items-center bg-emerald-50 py-6 text-emerald-600">
      <div className="rounded-full w-24 h-24 mb-3 flex justify-center items-center bg-white">
        {icon}
      </div>
      <span className="text-emerald-700">{message}</span>
    </div>
  );
}