import React from 'react';
import { Card } from '@idds/react';

const Scard = ({ title, desc, org }) => (
  <Card className="scard">
    <a href="#" className="scard__link">
      <span className="scard__main">
        <span className="scard__title">{title}</span>
        <span className="scard__desc">{desc}</span>
        <span className="scard__org">{org}</span>
      </span>
      <svg className="scard__arrow" viewBox="0 0 24 24">
        <path d="M7 17L17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </a>
  </Card>
);

export default Scard;
