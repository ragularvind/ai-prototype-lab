import Link from 'next/link';

const workflows = [
  {
    id: 'chatbot',
    title: 'Chatbot',
    description: 'A simple conversational AI assistant that responds to your messages.',
    icon: '💬',
  },
  {
    id: 'summarizer',
    title: 'Text Summarizer',
    description: 'Paste long text and get a concise summary in seconds.',
    icon: '📝',
  },
  {
    id: 'idea-generator',
    title: 'Startup Idea Generator',
    description: 'Generate unique business ideas based on your interests or keywords.',
    icon: '💡',
  },
  {
    id: 'agent-demo',
    title: 'Agent Workflow Demo',
    description: 'Watch an AI agent break down a complex task into steps.',
    icon: '🤖',
  }
];

export default function WorkflowsPage() {
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 0', flex: 1 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Available Workflows</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>
        Select a template below to start building and testing your AI prototype.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {workflows.map((workflow) => (
          <div key={workflow.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{workflow.icon}</div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{workflow.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>
              {workflow.description}
            </p>
            <Link href={`/workflows/${workflow.id}`} className="btn btn-primary" style={{ width: '100%' }}>
              Open Workflow
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
