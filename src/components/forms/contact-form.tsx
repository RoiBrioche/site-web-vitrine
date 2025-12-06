"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqarljkg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

  if (res.ok) {
    setStatus("sent");
    form.reset();
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/60"
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Nom
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-2xl border border-zinc-200/70 bg-transparent px-4 py-2 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700"
            placeholder="Ada Lovelace"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-2xl border border-zinc-200/70 bg-transparent px-4 py-2 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700"
            placeholder="vous@domaine.fr"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            className="mt-1 w-full rounded-2xl border border-zinc-200/70 bg-transparent px-4 py-2 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700"
            placeholder="Partagez votre idée..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        {status === "sent" ? "Message enregistré ✔︎" : "Envoyer"}
      </button>
      <p className="mt-3 text-xs text-zinc-500">
      </p>
    </form>
  );
}

