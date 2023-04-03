"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./banner";
import TextareaAutosize from "react-textarea-autosize";
import { BsSendCheckFill } from "react-icons/bs";

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
  const INPUT_BOX = "mb-4 resize-none px-3 py-2 border rounded bg-zinc-50";
  return (
    <section className="w-full">
      {/* {banner && <Banner banner={banner} />}
       */}
      <div className="bg-red-100 px-4 py-4 my-6 rounded flex flex-col items-center text-xl">
        <BsSendCheckFill className="" />
        <span>{`성공했습니다`}</span>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col border p-8 w-full rounded-lg"
      >
        <label htmlFor="from">Your Email</label>
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
        <label htmlFor="subject">Subject</label>
        <input
          type="string"
          id="subject"
          required
          name="subject"
          value={form.subject}
          onChange={onChange}
          className={INPUT_BOX}
        />
        <label htmlFor="message">Message</label>
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
        <button className="bg-zinc-100 hover:bg-zinc-300 rounded-lg h-12">
          Send Email
        </button>
      </form>
    </section>
  );
}
