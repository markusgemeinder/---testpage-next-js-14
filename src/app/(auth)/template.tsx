//file was renamed from layout.tsx to template.tsx (see /public/next-js-14-tutorial-22-template-vs-layout.png)

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';
import { useState } from 'react';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState('');
  const [charsLeftText, setCharsLeftText] = useState('');

  function handleInput(event) {
    event.preventDefault();

    const maxInputLength = 150;
    const charsLeft = maxInputLength - event.target.value.length;
    const noteText = `${charsLeft}/${maxInputLength} characters left`;
    setInput(event.target.value);
    setCharsLeftText(noteText);
  }

  return (
    <div>
      <div>
        <input value={input} onChange={handleInput} />
        <p>{charsLeftText}</p>
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link href={link.href} key={link.name} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
