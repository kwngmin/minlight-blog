"use client";
import { useState } from "react";

type form = {
  from: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const [form, setForm] = useState({ from: "", subject: "", message: "" });
  const onchange = (e) => {
    const { name, value } = e;
    setForm({ ...form, name: value });
  };
  return (
    <form>
      <label htmlFor="from"></label>
      <input
        type="text"
        id="form"
        required
        autoFocus
        name="form"
        value={form.from}
        onChange={onChange}
      />
    </form>
  );
}
