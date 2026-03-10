import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
          Welcome back to the <br />
          <span className="text-gradient">AI Prototype Lab</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Learn AI tools by building small prototypes. No complex API setup, coding knowledge, or expensive tools required.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/workflows" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
            Browse Workflows
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%', textAlign: 'left' }} className="animate-fade-in">
        <div className="card">
          <h3 style={{ fontSize: '1.25rem' }}>Zero Setup</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Ready-made workflows and templates where you can try AI features easily without API keys.</p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: '1.25rem' }}>Learn by Doing</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Understand AI concepts and capabilities by interacting with small, focused prototypes.</p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: '1.25rem' }}>Low Cost & Simple</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Forget expensive tools and complicated tutorials. Start creating immediately.</p>
        </div>
      </div>
    </div>
  );
}
