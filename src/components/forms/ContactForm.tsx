"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Message sent successfully!");
  };

  return (
    <form className="max-w-xl mx-auto">
      <Input label="Name" name="name" onChange={handleChange} />
      <Input label="Email" name="email" onChange={handleChange} />
      <Input label="Message" name="message" onChange={handleChange} />

      <Button onClick={handleSubmit}>Send Message</Button>
    </form>
  );
}
