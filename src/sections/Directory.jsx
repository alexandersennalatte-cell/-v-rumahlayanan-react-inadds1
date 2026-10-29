import React from 'react';
import { Badge, Card } from '@idds/react';
import directory from '../data/directory';
import Dcard from '../components/Dcard';

const Directory = () => (
  <section className="dir" id="direktori">
    <div className="container">
      <div className="dir__head">
        <div>
          <p className="eyebrow">
            <span className="eyebrow__rule"></span>Temukan layanan anda
          </p>
          <h2 className="h2">Direktori layanan</h2>
          <p className="dir__lead">
            Seluruh 31 entri utama pada portal Rumah Layanan, dikelompokkan agar mudah ditemukan. Pilih layanan untuk mengenal kanal atau instansi penyelenggara.
          </p>
        </div>
        <Badge variant="info" type="soft" prefixIcon={
          <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
            <rect x="3" y="4" width="7" height="7" rx="1" />
            <rect x="14" y="4" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        }>
          31 entri portal
        </Badge>
      </div>

      <div className="dir__grid">
        {directory.map((d) => (
          <Card key={d.title} className="dcard">
            <Dcard {...d} />
          </Card>
        ))}
      </div>

      <p className="dir__note">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 17L17 7" />
          <path d="M9 7h8v8" />
        </svg>
        Kanal layanan dapat berupa situs instansi, aplikasi, atau WhatsApp. Layanan Administrasi Desa ditampilkan sebagai rujukan informasi portal.
      </p>
    </div>
  </section>
);

export default Directory;
