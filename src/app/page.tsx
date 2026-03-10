"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // If user is already logged in, push to dashboard
    const user = localStorage.getItem('userAuth');
    if (user) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Generate simple UUID-like string
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    const userSession = {
      id,
      name: name.trim(),
      email: email.trim()
    };
    
    localStorage.setItem('userAuth', JSON.stringify(userSession));
    router.push('/dashboard');
  };

  return (
    <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}>
      <div className="card animate-fade-in" style={{ maxWidth: '450px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          <span className="text-gradient">AI Prototype Lab</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Please log in to continue building your prototypes.
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Full Name</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. Satoshi Nakamoto" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Email Address</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="e.g. builder@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Log In securely
          </button>
        </form>
      </div>
    </div>
  );
}
