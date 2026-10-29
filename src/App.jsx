import React, { useEffect } from 'react';
import { ToastProvider, setBrandTheme, setThemeMode } from '@idds/react';
import TopBar from './sections/TopBar';
import Header from './sections/Header';
import Hero from './sections/Hero';
import LifeStages from './sections/LifeStages';
import Directory from './sections/Directory';
import Guide from './sections/Guide';
import Aspirations from './sections/Aspirations';
import Citizens from './sections/Citizens';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    try {
      setBrandTheme('panrb');
      setThemeMode('light');
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.stage, .hcard, .dcard, .acard, .step, .wlist li, .timeline__item, .infobar'
    );
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
      );
      targets.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = (i % 6) * 55 + 'ms';
        obs.observe(el);
      });
      return () => obs.disconnect();
    } else {
      targets.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') {
        if (href === '#') e.preventDefault();
        return;
      }
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <ToastProvider>
      <TopBar />
      <Header />
      <Hero />
      <LifeStages />
      <Directory />
      <Guide />
      <Aspirations />
      <Citizens />
      <Footer />
    </ToastProvider>
  );
}

export default App;
