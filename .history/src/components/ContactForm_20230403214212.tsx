"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Banner, { BannerData } from "./Banner";

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
    setBanner({ message: "이메일을 발송했습니다.", state: "success" });
    // setForm({
    //   from: "",
    //   subject: "",
    //   message: "",
    // });
    setTimeout(() => {
      setBanner(null);
    }, 4000);
  };
  const INPUT_LABEL = "font-medium text-black/60 mb-1";
  const INPUT_BOX = "mb-4 resize-none px-3 py-2 border rounded bg-zinc-50";
  return (
    <section className="w-full">
      {banner && <Banner banner={banner} />}
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
        <button className="bg-slate-600 hover:bg-zinc-300 rounded-lg h-12 font-medium">
          Send Email
        </button>
      </form>
    </section>
  );
}
