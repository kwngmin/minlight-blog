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
    <div className="bg-red-100 px-4 py-2 rounded my-10 flex justify-center">
      {isSuccess}
      {`${message}`}
    </div>
  );
}
