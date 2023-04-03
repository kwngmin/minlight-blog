import { BsSendCheckFill, BsFillSendXFill } from "react-icons/bs";
export type BannerData = {
  message: string;
  state: "success" | "error";
};
export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess =
    state === "success" ? <BsSendCheckFill /> : <BsFillSendXFill />;
  return (
    <div className="bg-red-100 px-4 py-2 rounded m-10">{`${isSuccess} ${message}`}</div>
  );
}
