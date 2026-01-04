'use client';

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoutButton from './logout.button';

export default function Header() {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = () => {
      const hasToken = document.cookie.includes('token=');
      setToken(hasToken);
    };

    checkToken();

    // Check token periodically in case it changes
    const interval = setInterval(checkToken, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-sm border-b border-border">
      <nav className="flex items-center justify-between max-w-7xl mx-auto h-16 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="font-bold bg-primary text-primary-foreground px-3 py-1 rounded-md">
          EgyptGo
        </Link>

        {/* Links */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/packs">Packages</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Auth actions */}
        <div className="flex gap-4 items-center">
          {!token ? (
            <Link href="/login" className="hover:text-primary">
              Sign in
            </Link>
          ) : (
            <LogoutButton className="hover:text-primary cursor-pointer" />
          )}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
