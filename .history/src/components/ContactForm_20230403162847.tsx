"use client";
import { ChangeEvent, useState } from "react";

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
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
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
      <label htmlFor="message"></label>
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
