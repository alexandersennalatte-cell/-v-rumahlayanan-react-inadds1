import React from 'react';
import { Divider, Stepper } from '@idds/react';

const guideSteps = [
  { label: 'Temukan layanan', description: 'Gunakan pencarian, perjalanan hidup, atau kelompok pada direktori.' },
  { label: 'Buka kanal instansi', description: 'Kenali perangkat daerah dan akses situs, aplikasi, atau kontak resmi.' },
  { label: 'Ikuti informasi resmi', description: 'Baca persyaratan dan alur layanan terbaru dari instansi terkait.' },
];

const Guide = () => (
  <section className="guide" id="panduan">
    <div className="container guide__inner">
      <div className="guide__head">
        <p className="eyebrow eyebrow--gold">
          <span className="eyebrow__rule"></span>Panduan singkat
        </p>
        <h2 className="h2">
          Mulai dari<br />kebutuhan Anda.
        </h2>
      </div>

      <Stepper
        steps={guideSteps.map((s) => ({ label: (
          <span>
            <strong>{s.label}</strong>
            <br />
            <small>{s.description}</small>
          </span>
        ) }))}
        currentStep={0}
      />

      <Divider className="guide__divider" />
    </div>
  </section>
);

export default Guide;
