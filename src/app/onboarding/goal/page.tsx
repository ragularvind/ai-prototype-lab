"use client";

import { useRouter } from 'next/navigation';

export default function OnboardingGoal() {
  const router = useRouter();

  const handleSelect = (goal: string) => {
    localStorage.setItem('onboarding_goal', goal);
    router.push('/onboarding/budget');
  };

  const options = [
    "Learn AI tools",
    "Build mini prototype",
    "Build mini SaaS",
    "Explore AI"
  ];

  return (
    <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}>
      <div className="card animate-fade-in" style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Your Goal</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Why are you here today?
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
