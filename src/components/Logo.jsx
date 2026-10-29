import React from 'react';

const Logo = ({ light = false }) => (
  <a className={`logo ${light ? 'logo--light' : ''}`} href="#top">
    <span className="logo__mark">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 11l8-6.5L20 11" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    </span>
    <span className="logo__text">
      <span className="logo__title">Rumah Layanan</span>
      {!light && <span className="logo__sub">Kabupaten Lamongan</span>}
    </span>
  </a>
);

export default Logo;
