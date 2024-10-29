// Header.js
import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import Button from './Button';

const navItems = [
  { text: 'Tentang Agendakota', href: '#' },
  { text: 'Fitur', href: '#' },
  { text: 'Untuk Klinik', href: '#' },
  { text: 'Biaya', href: '#' },
  { text: 'Hubungi Kami', href: '#' }
];

function Header() {
  return (
    <header className="flex flex-col justify-center items-center w-full min-h-[80px]">
      <div className="flex flex-wrap gap-10 justify-between items-center px-8 w-full max-w-7xl md:px-5">
        <nav className="flex items-center gap-10">
          <Logo />
          <ul className="flex gap-8 text-base font-semibold text-slate-600">
            {navItems.map((item) => (
              <NavItem key={item.text} text={item.text} href={item.href} />
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 text-base font-semibold">
          <Button variant="secondary" text="Log In" />
          <Button variant="primary" text="Sign Up" />
        </div>
      </div>
    </header>
  );
}

export default Header;
