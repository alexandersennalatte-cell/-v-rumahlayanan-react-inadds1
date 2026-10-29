import React, { useState, useEffect } from 'react';
import { Button, Drawer, ThemeToggle } from '@idds/react';
import Logo from '../components/Logo';

const links = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#perjalanan', label: 'Perjalanan hidup' },
  { href: '#direktori', label: 'Direktori layanan' },
  { href: '#panduan', label: 'Panduan' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#beranda');
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['#beranda', '#perjalanan', '#direktori', '#panduan', '#pengaduan']
      .map((id) => document.getElementById(id.slice(1)))
      .filter(Boolean);
    const spy = () => {
      const pos = window.scrollY + 140;
      let current = sections[0];
      sections.forEach((sec) => {
        if (sec.offsetTop <= pos) current = sec;
      });
      if (current) setActive('#' + current.id);
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
    return () => window.removeEventListener('scroll', spy);
  }, []);

  const navigate = (href) => {
    setOpen(false);
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.replaceState(null, '', href);
  };

  return (
    <header className={`header ${stuck ? 'is-stuck' : ''}`} id="top">
      <div className="container header__inner">
        <Logo />
        <nav className="nav" aria-label="Navigasi utama">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav__link ${active === l.href ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(l.href);
              }}
            >
              {l.label}
            </a>
          ))}
          <Button hierarchy="primary" size="md" onClick={() => navigate('#pengaduan')}>
            Pengaduan
          </Button>
        </nav>
        <ThemeToggle />
        <button
          className="nav-toggle"
          aria-label="Buka menu"
          onClick={() => setOpen(true)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <Drawer isOpen={open} onClose={() => setOpen(false)} position="left">
        <nav className="mobile-nav" aria-label="Navigasi mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav__link ${active === l.href ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(l.href);
              }}
            >
              {l.label}
            </a>
          ))}
          <Button hierarchy="primary" size="md" onClick={() => navigate('#pengaduan')}>
            Pengaduan
          </Button>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
