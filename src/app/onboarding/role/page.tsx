"use client";

import { useRouter } from 'next/navigation';

export default function OnboardingRole() {
  const router = useRouter();

  const handleSelect = (role: string) => {
    localStorage.setItem('onboarding_role', role);
    router.push('/onboarding/goal');
  };

  const options = [
    "Student",
    "Working professional",
    "Beginner",
    "Other"
  ];

  return (
    <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}>
      <div className="card animate-fade-in" style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome!</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          To personalize your experience, which best describes you?
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
