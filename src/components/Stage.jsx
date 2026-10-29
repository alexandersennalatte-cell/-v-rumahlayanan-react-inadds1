import React from 'react';
import { Card } from '@idds/react';
import Scard from './Scard';

const Stage = ({ stage }) => (
  <Card className="stage" id={stage.id}>
    <header className="stage__head">
      <span className="stage__num">{stage.num}</span>
      <h3 className="stage__title">{stage.title}</h3>
      <p className="stage__desc">{stage.desc}</p>
    </header>
    <div className="stage__list">
      {stage.cards.map((c) => (
        <Scard key={c.title} {...c} />
      ))}
    </div>
    {stage.note && <p className="stage__note">{stage.note}</p>}
  </Card>
);

export default Stage;
