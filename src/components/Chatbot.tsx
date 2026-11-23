"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const CHIPS = [
  "What services do you offer?",
  "How does the free demo work?",
  "How much does it cost?",
  "How do I get started?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Web Automate assistant. Ask me about our services, the free demo, or how to get started.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    const next = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "Sorry — something went wrong. Try the demo form and we'll reach out within 24 hours.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Sorry — the chat is having trouble right now. Use the demo form below or email infowebautomate@gmail.com and we'll reach out within 24 hours.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-700 bg-navy-850 shadow-2xl shadow-black/60 animate-fade-up">
          <div className="flex items-center justify-between bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green px-4 py-3">
            <div>
              <p className="font-bold text-white">Ask Web Automate</p>
              <p className="text-xs text-white/80">Answers about our services &amp; free demo</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full bg-black/20 px-3 py-1 text-white hover:bg-black/30"
            >
              ✕
            </button>
          </div>
          <div className="h-80 overflow-y-auto space-y-3 p-4 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-brand-blue text-white"
                    : "bg-slate-800 text-slate-100"
                }`}
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="max-w-[85%] rounded-2xl bg-slate-800 px-3 py-2 text-slate-400">
                Typing…
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="flex flex-wrap gap-2 border-t border-slate-800 px-3 pt-3">
            {CHIPS.map((c) => (
              <button
                key={c}
                onClick={() => send(c)}
                className="rounded-full border border-slate-600 px-2.5 py-1 text-xs text-slate-300 hover:border-brand-teal hover:text-white"
              >
                {c}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Web Automate…"
              className="min-w-0 flex-1 rounded-full border border-slate-600 bg-navy-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-brand-teal focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy}
              className="rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-2xl text-white shadow-lg shadow-black/50 transition hover:scale-105"
        aria-label="Open chat with Web Automate"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
