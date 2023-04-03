"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 발송했습니다.",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일을 발송하는데 실패했습니다. 다시 시도해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 5000);
      });
  };
  const INPUT_LABEL = "font-medium text-black/60 mb-1";
  const INPUT_BOX =
    "mb-4 resize-none px-2 lg:px-3 py-2 border rounded bg-zinc-50";
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
        <button className="bg-slate-500 hover:bg-slate-400 rounded-lg h-12 font-medium text-white my-3">
          Send Email
        </button>
      </form>
    </section>
  );
}
