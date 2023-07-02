import React from 'react';
import css from './Technologies.module.css';
import { Card } from 'components/Card/Card';
import { useState } from 'react';
export const Technologies = () => {
  const cardsData = [
    {
      id: 1,
      title: 'REACT  REDUX',
      content: 'Clark Kent',
      imgUrl: 'https://unsplash.it/200/200',
    },
    {
      id: 2,
      title: 'JAVA SCRIPT',
      content: 'Bruce Wayne',
      imgUrl: 'https://unsplash.it/201/200',
    },
    {
      id: 3,
      title: 'GIT',
      content: 'Peter Parker',
      imgUrl: 'https://unsplash.it/200/201',
    },
    {
      id: 4,
      title: 'NPM',
      content: 'Tony Stark',
      imgUrl: 'https://unsplash.it/201/201',
    },
    {
      id: 5,
      title: 'NODE',
      content: 'Reed Richards',
      imgUrl: 'https://unsplash.it/202/200',
    },
  ];

  const [count, setCount] = useState(2);
  setTimeout(function () {
    setCount(count + 1);
  }, 2000);

  const setbig = () => {
    if (count === 5) setCount(0);
    return count;
  };
  return (
    <>
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
