"use client";
import { useState } from "react";

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
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
        value={form}
        onChange={onChange}
      />
    </form>
  );
}
