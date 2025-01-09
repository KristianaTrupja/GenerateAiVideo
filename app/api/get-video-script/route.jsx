import { chatSession } from "/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    console.log("Prompt received:", prompt);

    // Send message to chat session
    const result = await chatSession.sendMessage(prompt);

    // Ensure response is properly handled
    const textResponse = await result.response.text();
    console.log("AI Response:", textResponse);

    // Return response as JSON
    return NextResponse.json({ result: JSON.parse(textResponse) });
  } catch (e) {
    console.error("Error occurred:", e);

    // Handle error gracefully
    return NextResponse.json({ error: e.message || "An unexpected error occurred" }, { status: 500 });
  }
}
