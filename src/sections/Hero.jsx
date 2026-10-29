import React, { useState } from 'react';
import { Button, Chip, InputSearch } from '@idds/react';

const Hero = () => {
  const [query, setQuery] = useState('');
  const [live, setLive] = useState('');

  const submit = (e) => {
    e?.preventDefault?.();
    const q = query.trim();
    if (!q) return;
    const cards = Array.from(document.querySelectorAll('.scard, .dlist li a'));
    let count = 0;
    cards.forEach((el) => {
      const text = el.textContent.toLowerCase();
      if (text.includes(q.toLowerCase())) {
        el.classList.add('is-match');
        count++;
      } else {
        el.classList.remove('is-match');
      }
    });
    setLive(`${count} hasil untuk “${q}”`);
  };

  return (
    <section className="hero" id="beranda">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__rule"></span>Satu pintu, beragam kebutuhan
          </p>
          <h1 className="hero__title">
            Hadir di setiap tahap<br />kehidupan.
          </h1>
          <p className="hero__lead">
            Temukan layanan Kabupaten Lamongan dalam satu pintu. Dari menyambut kelahiran, menata masa depan, hingga mendampingi keluarga di masa tua kehidupan.
          </p>

          <form className="search" id="searchForm" role="search" onSubmit={submit}>
            <InputSearch
              value={query}
              onChange={(val) => setQuery(val)}
              placeholder="Cari layanan, kebutuhan, atau instansi..."
              size="md"
            />
            <Button type="submit" hierarchy="primary" size="md">
              Cari
            </Button>
          </form>
          <p className="sr-only" id="searchLive" role="status" aria-live="polite">
            {live}
          </p>

          <div className="search__hints">
            <span>Contoh pencarian:</span>
            <Chip
              options={[
                { label: 'Adminduk', value: 'Adminduk' },
                { label: 'Pendidikan', value: 'Pendidikan' },
                { label: 'Perizinan', value: 'Perizinan' },
              ]}
              selected={query}
              onSelect={(val) => setQuery(val)}
            />
          </div>

          <div className="hero__actions">
            <Button hierarchy="primary" size="lg" onClick={() => {
              const t = document.getElementById('perjalanan');
              if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
            }}>
              Jelajahi perjalanan hidup
            </Button>
            <Button hierarchy="secondary" size="lg" onClick={() => {
              const t = document.getElementById('direktori');
              if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
            }}>
              Buka direktori
            </Button>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__photo">
            <img src="/images/hero-family.png" alt="Keluarga Lamongan bersama di rumah" />
            <div className="hero__card">
              <span className="hero__card-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21v-8" />
                  <path d="M12 13c-3.5 0-6-2-6-4.5S8.5 4 12 4s6 2 6 4.5S15.5 13 12 13z" />
                  <path d="M12 21c0-3 2-4.5 4.5-4.5S21 18 21 19.5" />
                </svg>
              </span>
              <div>
                <p className="hero__card-title">Bertumbuh bersama Lamongan</p>
                <p className="hero__card-sub">Layanan publik, dekat dengan kehidupan Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
