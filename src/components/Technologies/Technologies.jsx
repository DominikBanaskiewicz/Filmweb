import React from 'react';
import css from './Technologies.module.css';
import { Card } from 'components/Card/Card';
import { cardsData } from 'technologies';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

export const Technologies = () => {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  const [count, setCount] = useState(2);
  setTimeout(function () {
    setCount(count + 1);
  }, 1500);

  const setbig = () => {
    if (count === 5) setCount(0);
    return count;
  };
  const deleyValue = (index, time) => {
    return index * time;
  };
  return (
    <>
      <h2 className={css.Technologies_header}>Selected technologies</h2>
      <div ref={ref} className={css.Technologies__container}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <motion.div
              className={css.dataContainer__label}
              isinview="onscreen"
              variants={{
                hidden: { opacity: 0, x: 300 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: deleyValue(index, 0.3) },
                },
              }}
              initial="hidden"
              animate={mainControls}
            >
              <Card
                isBig={setbig()}
                key={cardsData.indexOf(card)}
                id={cardsData.indexOf(card)}
                title={card.title}
                content={card.content}
                imgUrl={card.imgUrl}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};
