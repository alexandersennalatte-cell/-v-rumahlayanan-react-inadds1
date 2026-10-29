import React, { useState } from 'react';
import stages from '../data/stages';
import Stage from '../components/Stage';

const timelineItems = [
  { target: 'stage-kelahiran', label: 'Kelahiran', icon: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>' },
  { target: 'stage-pendidikan', label: 'Anak & Pendidikan', icon: '<path d="M3 8l9-4 9 4-9 4z"/><path d="M7 10v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/>' },
  { target: 'stage-bekerja', label: 'Bekerja & Berusaha', icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>' },
  { target: 'stage-pernikahan', label: 'Pernikahan & Keluarga', icon: '<path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9z"/>' },
  { target: 'stage-lansia', label: 'Lansia', icon: '<circle cx="12" cy="5" r="2.4"/><path d="M9 21v-4H6l2-6h8l2 6h-3v4z"/>' },
  { target: 'stage-akhir', label: 'Akhir Hayat', icon: '<circle cx="7" cy="7" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="6" cy="13" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="13" r="2"/><path d="M8 20h8"/>' },
];

const LifeStages = () => {
  const [active, setActive] = useState('stage-kelahiran');

  const selectStage = (targetId) => {
    setActive(targetId);
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <section className="stages" id="perjalanan">
        <div className="container">
          <div className="stages__head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow__rule"></span>Layanan sepanjang kehidupan
              </p>
              <h2 className="h2">
                Setiap fase punya cerita.<br />Setiap kebutuhan punya pintu.
              </h2>
            </div>
            <p className="stages__intro">
              Mulai dari tahap yang dekat dengan Anda. Temukan layanan dan program perangkat daerah yang relevan untuk diri sendiri maupun keluarga.
            </p>
          </div>

          <ol className="timeline" id="timeline">
            {timelineItems.map((t) => (
              <li
                key={t.target}
                className={`timeline__item ${active === t.target ? 'is-active' : ''}`}
                data-target={t.target}
                tabIndex={0}
                role="button"
                onClick={() => selectStage(t.target)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectStage(t.target);
                  }
                }}
              >
                <span className="timeline__dot">
                  <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: t.icon }} />
                </span>
                <span className="timeline__label">{t.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="stagegrid">
        <div className="container">
          <div className="stagegrid__cols">
            {stages.map((s) => (
              <Stage key={s.id} stage={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeStages;
