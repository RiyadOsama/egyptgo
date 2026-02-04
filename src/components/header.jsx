'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import LogoutButton from './logout.button';

const links = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/packs', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(document.cookie.includes('token='));
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold bg-primary text-primary-foreground px-3 py-1 rounded-md">
            EgyptGo
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-4 items-center">
            {!isAuth ? (
              <Link href="/login" className="hover:text-primary transition">
                Sign in
              </Link>
            ) : (
              <LogoutButton className="hover:text-primary cursor-pointer" />
            )}
            <ModeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden gap-4 items-center">
            <ModeToggle />
            <button onClick={() => setIsOpen((prev) => !prev)} className="p-2 hover:bg-accent rounded-md transition">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <ul className="flex flex-col py-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-accent rounded-md transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="border-t border-border pt-2 mt-2 px-4">
                {!isAuth ? (
                  <Link href="/login" onClick={closeMenu} className="block py-2 hover:bg-accent rounded-md transition">
                    Sign in
                  </Link>
                ) : (
                  <LogoutButton className="hover:text-primary cursor-pointer" />
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
