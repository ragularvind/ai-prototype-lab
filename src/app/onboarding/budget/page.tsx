"use client";

import { useRouter } from 'next/navigation';

export default function OnboardingBudget() {
  const router = useRouter();

  const handleSelect = (budget: string) => {
    localStorage.setItem('onboarding_budget', budget);
    // After the final step, send them to login
    router.push('/login');
  };

  const options = [
    "Free only",
    "Low cost",
    "Paid ok"
  ];

  return (
    <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}>
      <div className="card animate-fade-in" style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Budget</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          What is your typical budget for AI tools?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {options.map((option) => (
            <button 
              key={option} 
              onClick={() => handleSelect(option)}
              className="btn btn-secondary" 
              style={{ width: '100%', textAlign: 'left', padding: '1rem 1.5rem', justifyContent: 'flex-start' }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
