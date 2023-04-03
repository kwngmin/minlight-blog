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
  const onChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form>
      <label htmlFor="from"></label>
      <input
        type="email"
        id="from"
        required
        autoFocus
        name="from"
        value={form.from}
        onChange={onChange}
      />
      <label htmlFor="subject"></label>
      <input
        type="email"
        id="subject"
        required
        autoFocus
        name="subject"
        value={form.subject}
        onChange={onChange}
      />
      <label htmlFor="from"></label>
      <input
        type="email"
        id="message"
        required
        autoFocus
        name="message"
        value={form.message}
        onChange={onChange}
      />
    </form>
  );
}
