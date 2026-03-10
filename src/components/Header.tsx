"use client";

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<{ name: string; email: string; id: string } | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check local storage for auth session
    const storedUser = localStorage.getItem('userAuth');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
      // Auto-redirect to login if trying to access protected areas, but allow onboarding and login pages
      if (pathname !== '/' && !pathname.startsWith('/onboarding') && !pathname.startsWith('/login')) {
        router.push('/');
      }
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('userAuth');
    setUser(null);
    router.push('/');
  };

  return (
    <header className="container header" style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '2rem' }}>
      <Link href={user ? "/dashboard" : "/"} className="logo text-gradient">AI Prototype Lab</Link>
      
      {isClient && user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Welcome, <strong style={{ color: 'var(--text-primary)' }}>{user.name.split(' ')[0]}</strong></span>
          <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
