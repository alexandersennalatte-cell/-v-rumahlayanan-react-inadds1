import React from 'react';
import Logo from '../components/Logo';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand">
        <Logo light />
        <p className="footer__org">Pemerintah Kabupaten Lamongan</p>
        <p className="footer__desc">
          Pintu informasi layanan untuk setiap tahap kehidupan dan kebutuhan masyarakat Lamongan.
        </p>
      </div>

      <nav className="footer__col" aria-label="Jelajahi portal">
        <h3 className="footer__label">Jelajahi portal</h3>
        <ul>
          <li><a href="#perjalanan">Perjalanan hidup</a></li>
          <li><a href="#direktori">Direktori layanan</a></li>
          <li><a href="#panduan">Panduan layanan</a></li>
          <li><a href="#pengaduan">Pengaduan masyarakat</a></li>
        </ul>
      </nav>

      <nav className="footer__col" aria-label="Rujukan resmi">
        <h3 className="footer__label">Rujukan resmi</h3>
        <ul>
          <li>
            <a href="#">
              lamongankab.go.id{' '}
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              PPID Kabupaten Lamongan{' '}
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              Situs perangkat daerah{' '}
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="container footer__bottom">
      <p>Rumah Layanan · Pemerintah Kabupaten Lamongan</p>
      <p className="footer__tag">Hadir di setiap tahap kehidupan.</p>
    </div>
  </footer>
);

export default Footer;
