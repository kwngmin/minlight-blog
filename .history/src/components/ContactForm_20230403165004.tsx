"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./banner";

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
    setBanner({ message: "성공했어", state: "success" });
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {banner && <Banner banner={banner} />}
      <label htmlFor="from">From</label>
      <input
        type="email"
        id="from"
        required
        autoFocus
        name="from"
        value={form.from}
        onChange={onChange}
      />
      <label htmlFor="subject">Subject</label>
      <input
        type="email"
        id="subject"
        required
        name="subject"
        value={form.subject}
        onChange={onChange}
      />
      <label htmlFor="message">message</label>
      <textarea
        row={10}
        id="message"
        required
        name="message"
        value={form.message}
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  );
}
