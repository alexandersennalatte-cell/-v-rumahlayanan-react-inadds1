import React from 'react';
import { Alert, Card } from '@idds/react';

const wlist = [
  { title: 'Layanan Informasi Publik', desc: 'Akses informasi melalui PPID Kabupaten Lamongan.' },
  { title: 'Nomor Telepon Penting', desc: 'Rujukan kontak pada situs Pemerintah Kabupaten Lamongan.' },
  { title: 'Survei Kepuasan Masyarakat', desc: 'Sampaikan penilaian layanan melalui SENYUMLA.' },
];

const Citizens = () => (
  <section className="warga">
    <div className="container warga__inner">
      <div className="warga__head">
        <p className="eyebrow">
          <span className="eyebrow__rule"></span>Terbuka untuk warga
        </p>
        <h2 className="h2">
          Informasi yang membantu<br />Anda mengambil langkah.
        </h2>
        <p className="warga__lead">
          Kenali informasi publik, temukan kontak penting, dan berikan masukan tentang layanan.
        </p>
      </div>

      <ul className="wlist">
        {wlist.map((w) => (
          <li key={w.title}>
            <Card className="wlist__card">
              <a href="#" className="wlist__link">
                <span className="wlist__main">
                  <span className="wlist__title">{w.title}</span>
                  <span className="wlist__desc">{w.desc}</span>
                </span>
              </a>
            </Card>
          </li>
        ))}
      </ul>
    </div>

    <div className="container">
      <Alert
        variant="info"
        title="Sumber informasi"
        message="lamongankab.go.id dan situs resmi perangkat daerah. Persyaratan dan ketersediaan layanan mengikuti informasi instansi terkait."
      />
    </div>
  </section>
);

export default Citizens;
