import React from 'react';
import { Tooltip } from '@idds/react';

const Dcard = ({ title, icon, items }) => (
  <section className="dcard">
    <h3 className="dcard__head">
      <span className="dcard__ico">
        <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} />
      </span>
      {title}
    </h3>
    <ul className="dlist">
      {items.map((it) => (
        <li key={it.title}>
          <a href="#">
            <span className="dlist__main">
              <span className="dlist__title">{it.title}</span>
              <span className="dlist__sub">{it.sub}</span>
            </span>
            {it.info ? (
              <Tooltip title="Rujukan informasi portal">
                <span className="dlist__info">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5" />
                    <path d="M12 8h.01" />
                  </svg>
                </span>
              </Tooltip>
            ) : (
              <svg className="dlist__arrow" viewBox="0 0 24 24">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            )}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Dcard;
