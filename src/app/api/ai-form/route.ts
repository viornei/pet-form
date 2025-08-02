import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { profile } = await req.json();

    if (!profile) {
      return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    }

    const petName = profile.petName || "your pet";
    const ownerName = profile.ownerName || "you";

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 250,
      messages: [
        {
          role: "system",
          content: `You're Buddy — a warm, friendly AI helping pet owners improve sitter profiles.

Your task: suggest 3–4 short, sitter-focused questions to better understand the pet's needs.
IMPORTANT:
- Focus the first 1–2 questions on special needs, quirks, or non-obvious behaviors based on the profile.
- Do NOT speak from the sitter’s perspective.
- Do NOT use bullets, dashes, or numbering.
- Style: warm, natural, conversational — like you're chatting with the owner.`,
        },
        {
          role: "user",
          content: `Here's what we already know about ${petName}:
${JSON.stringify(profile)}

Now suggest 3–4 warm, helpful questions that would help a sitter care for ${petName} better.

→ Start with questions based on any unusual traits, routines, or needs from the profile.  
→ Then add general sitter-relevant questions if needed.

Only output the questions. One per line. No dashes, no numbers, no extra text.`,
        },
      ],
    });

    const result = completion.choices[0]?.message?.content;
    return NextResponse.json({ result });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 },
    );
  }
}
