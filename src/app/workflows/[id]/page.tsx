"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Use this for mock AI logic to simulate delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const workflowDetails = {
  'chatbot': {
    title: 'Chatbot',
    description: 'Ask anything and get a simple response.',
    placeholder: 'Hello, how can I learn AI?',
    buttonText: 'Send Message',
    getMockResponse: async (input: string) => {
      await delay(1500);
      return `AI Assistant: That's a great question! Learning AI starts with understanding the basics of prompting and exploring simple prototypes just like this one. Your input was "${input}".`;
    }
  },
  'summarizer': {
    title: 'Text Summarizer',
    description: 'Paste a long paragraph and I will summarize it for you.',
    placeholder: 'Paste your long text here...',
    buttonText: 'Summarize',
    getMockResponse: async (input: string) => {
      await delay(2000);
      return `Summary: The provided text discusses various points and concludes with key takeaways. \n\n(Original length: ${input.length} characters)`;
    }
  },
  'idea-generator': {
    title: 'Startup Idea Generator',
    description: 'Enter a keyword or industry to get a unique startup idea.',
    placeholder: 'e.g., Education, Healthcare, Pets',
    buttonText: 'Generate Idea',
    getMockResponse: async (input: string) => {
      await delay(1500);
      return `Idea: An AI-powered platform for "${input}" that connects users with automated tailored plans and expert consultation, lowering the barrier to entry by 50%.`;
    }
  },
  'agent-demo': {
    title: 'Agent Workflow Demo',
    description: 'Give the agent a complex task and watch it break it down.',
    placeholder: 'Plan a 3-day trip to Tokyo.',
    buttonText: 'Plan Task',
    getMockResponse: async (input: string) => {
      await delay(3000);
      return `Agent Task Breakdown:\n\n1. Researching criteria for: ${input}\n2. Identifying core steps required.\n3. Formulating action plan.\n\nResult:\n- Day 1: Arrival & Exploration\n- Day 2: Core Activities\n- Day 3: Wrap-up & Review`;
    }
  }
};

export default function WorkflowExecutionPage() {
  const params = useParams();
  const id = params?.id as keyof typeof workflowDetails;
  const workflow = workflowDetails[id];

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  if (!workflow) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Workflow not found</h1>
        <Link href="/workflows" className="btn btn-primary" style={{ marginTop: '2rem' }}>Go Back</Link>
      </div>
    );
  }

  const handleRun = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult('');
    try {
      const response = await workflow.getMockResponse(input);
      setResult(response);
    } catch {
      setResult('An error occurred during API simulation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 0', flex: 1, maxWidth: '800px' }}>
      <Link href="/workflows" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        ← Back to Workflows
      </Link>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{workflow.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{workflow.description}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <textarea 
            className="input-field" 
            rows={5} 
            placeholder={workflow.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ resize: 'vertical' }}
          />
          <button 
            className="btn btn-primary" 
            onClick={handleRun}
            disabled={loading || !input.trim()}
            style={{ alignSelf: 'flex-start', opacity: (loading || !input.trim()) ? 0.7 : 1 }}
          >
            {loading ? 'Processing...' : workflow.buttonText}
          </button>
        </div>
      </div>

      {(result || loading) && (
        <div className="card animate-fade-in" style={{ borderTop: '4px solid var(--accent-color)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Result</h3>
          {loading ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid var(--text-secondary)', borderTopColor: 'var(--accent-color)', animation: 'spin 1s linear infinite' }} />
              Running AI simulation...
            </div>
          ) : (
            <div style={{ whiteSpace: 'pre-wrap', color: 'var(--text-primary)', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              {result}
            </div>
          )}
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
