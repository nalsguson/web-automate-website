import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { CHAT_SYSTEM_PROMPT } from "@/lib/services";

export async function POST(req: NextRequest) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "The chatbot is not connected yet. Please use the demo form or email infowebautomate@gmail.com." },
      { status: 500 }
    );
  }
  const { messages } = await req.json().catch(() => ({}));
  if (!Array.isArray(messages) || !messages.length) {
    return NextResponse.json({ error: "No message." }, { status: 400 });
  }
  const clean = messages
    .filter((m) => m && typeof m.content === "string")
    .slice(-12)
    .map((m) => ({
      role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
      content: String(m.content).slice(0, 2000),
    }));

  try {
    const client = new Anthropic({ apiKey: key });
    const res = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 600,
      system: CHAT_SYSTEM_PROMPT,
      messages: clean,
    });
    const text = res.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { text: string }).text)
      .join("");
    return NextResponse.json({ reply: text || "Sorry — I couldn't come up with an answer. Try the demo form and we'll reach out within 24 hours." });
  } catch (err) {
    console.error("[chat] Anthropic error:", err);
    return NextResponse.json(
      { error: "The chatbot is having trouble right now. Please use the demo form or email infowebautomate@gmail.com." },
      { status: 500 }
    );
  }
}
