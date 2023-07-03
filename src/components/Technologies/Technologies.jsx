import React from 'react';
import css from './Technologies.module.css';
import { Card } from 'components/Card/Card';
import { cardsData } from 'technologies';
import { useState } from 'react';
export const Technologies = () => {
  const [count, setCount] = useState(2);
  setTimeout(function () {
    setCount(count + 1);
  }, 1500);

  const setbig = () => {
    if (count === 5) setCount(0);
    return count;
  };
  return (
    <>
      <h2 className={css.Technologies_header}>Selected technologies</h2>
      <div className={css.Technologies__container}>
        {cardsData.map(card => (
          <Card
            isBig={setbig()}
            key={cardsData.indexOf(card)}
            id={cardsData.indexOf(card)}
            title={card.title}
            content={card.content}
            imgUrl={card.imgUrl}
          />
        ))}
      </div>
    </>
  );
};
