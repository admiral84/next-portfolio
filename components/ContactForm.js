
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

// No backend needed: the form opens the visitor's email app with the message filled in.
export default function ContactForm({ email }) {
  const [f, setF] = useState({
    name: "",
    from: "",
    message: "",
  });

  const set = (k) => (e) =>
    setF((prev) => ({
      ...prev,
      [k]: e.target.value,
    }));

  function submit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${f.name}`);
    const body = encodeURIComponent(
      `${f.message}\n\n${f.name}\n${f.from}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  }

  const field =
    "mt-1 w-full rounded-xl border border-line bg-surface px-4 py-2.5";

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block text-sm font-medium">
        Your name
        <input
          required
          value={f.name}
          onChange={set("name")}
          className={field}
          autoComplete="name"
        />
      </label>

      <label className="block text-sm font-medium">
        Your email
        <input
          required
          type="email"
          value={f.from}
          onChange={set("from")}
          className={field}
          autoComplete="email"
        />
      </label>

      <label className="block text-sm font-medium">
        Message
        <textarea
          required
          rows={5}
          value={f.message}
          onChange={set("message")}
          className={field}
        />
      </label>

      <button className="btn btn-p" type="submit">
        <Send size={16} />
        Send by email
      </button>

      <p className="text-sm text-muted">
        This opens your email app with the message ready to send.
      </p>
    </form>
  );
}

