import React from 'react';

const TopBar = () => (
  <div className="topbar">
    <div className="container topbar__inner">
      <p className="topbar__brand">
        <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 10l9-6 9 6v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </svg>
        Pemerintah Kabupaten Lamongan
      </p>
      <p className="topbar__note">Informasi layanan dari portal dan perangkat daerah Lamongan</p>
    </div>
  </div>
);

export default TopBar;
