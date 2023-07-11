import css from './Card.module.scss';
import { useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const Card = ({ id, isBig, index, imgUrl, alt, title }) => {
  const getStyles = (id, id2) => {
    if (id === id2) return `${css.card} ${css.big}`;
    return `${css.card}`;
  };

  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  const left = {
    hidden: { opacity: 0, x: -700 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };
  const right = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <div ref={ref} id={id} className={getStyles(isBig, id)}>
      <motion.div
        className={css.dataContainer__label}
        whileInView="onscreen"
        variants={index % 2 === 0 ? left : right}
        initial="hidden"
        animate={mainControls}
      >
        <img className={css.card__image} src={imgUrl} alt={alt || 'Image'} />
        <div className={css.card__content}>
          <p className={css.card__content_title}>{title}</p>
        </div>
      </motion.div>
    </div>
  );
};
