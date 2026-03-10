import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: Request) {
  try {
    // Initialize inside the block so it doesn't break static generation where env var might not exist
    const openai = new OpenAI();
    
    const { workflowId, input } = await req.json();

    if (!workflowId || !input) {
      return NextResponse.json(
        { error: 'Missing workflowId or input' },
        { status: 400 }
      );
    }

    let systemPrompt = '';

    // Assign appropriate system prompts based on the workflow
    switch (workflowId) {
      case 'chatbot':
        systemPrompt = 'You are a helpful, friendly, and concise AI assistant. Respond naturally to the user message.';
        break;
      case 'summarizer':
        systemPrompt = 'You are an expert summarizer. Provide a clear, concise, and accurate summary of the following text.';
        break;
      case 'idea-generator':
        systemPrompt = 'You are a creative business strategist. Generate a unique, practical, and innovative startup idea based on the user provided keywords or industry. Keep the explanation to 2-3 sentences max.';
        break;
      case 'agent-demo':
        systemPrompt = 'You are an advanced AI task planner. Break down the user prompt into a structured, step-by-step action plan using numbered lists. Identify core steps and end with a brief expected result.';
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid workflowId' },
          { status: 400 }
        );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // or 'gpt-3.5-turbo' if preferred
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: input }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const output = completion.choices[0]?.message?.content || 'No response generated.';

    return NextResponse.json({ result: output });

  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: error.message || 'Something went wrong processing your request.' },
      { status: 500 }
    );
  }
}
