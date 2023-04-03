"use client";
import { ChangeEvent, FormEvent, useState } from "react";
// import Banner, { BannerData } from "./banner";
import TextareaAutosize from "react-textarea-autosize";
import { BsSendCheck } from "react-icons/bs";
import { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    setBanner({ message: "성공했어", state: "success" });
    // setTimeout(() => {
    //   setBanner(null);
    // }, 5000);
    // setForm({
    //   from: "",
    //   subject: "",
    //   message: "",
    // });
  };
  const INPUT_LABEL = "font-medium text-black/60 mb-1";
  const INPUT_BOX = "mb-4 resize-none px-3 py-2 border rounded bg-zinc-50";
  return (
    <section className="w-full">
      {/* {banner && <Banner banner={banner} />}
       */}
      <div className="px-4 mb-6 rounded-lg flex flex-col items-center bg-emerald-50 py-6 text-emerald-600">
        <div className="rounded-full w-24 h-24 mb-3 flex justify-center items-center bg-white">
          <BsSendCheck size={56} className="mr-2 mt-1" />
        </div>
        <span className="text-emerald-700">{`이메일을 발송했습니다`}</span>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col border p-8 w-full rounded-lg"
      >
        <label htmlFor="from" className={INPUT_LABEL}>
          Your Email
        </label>
        <input
          type="email"
          id="from"
          required
          autoFocus
          name="from"
          value={form.from}
          onChange={onChange}
          className={INPUT_BOX}
        />
        <label htmlFor="subject" className={INPUT_LABEL}>
          Subject
        </label>
        <input
          type="string"
          id="subject"
          required
          name="subject"
          value={form.subject}
          onChange={onChange}
          className={INPUT_BOX}
        />
        <label htmlFor="message" className={INPUT_LABEL}>
          Message
        </label>
        <TextareaAutosize
          rows={6}
          minRows={6}
          id="message"
          required
          name="message"
          value={form.message}
          onChange={onChange}
          className={INPUT_BOX}
        />
        <button className="bg-zinc-100 hover:bg-zinc-300 rounded-lg h-12 font-medium">
          Send Email
        </button>
      </form>
    </section>
  );
}
