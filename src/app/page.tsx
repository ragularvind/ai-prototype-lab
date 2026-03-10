import Link from 'next/link';

export default function Home() {
  return (
    <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
          Welcome to <br />
          <span className="text-gradient">AI Prototype Lab</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Learn AI tools and build mini prototypes at low cost.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/onboarding/role" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}
