import css from './Card.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export const Card = ({ id, isBig, imgUrl, alt, title, index }) => {
  const getStyles = (id, id2) => {
    if (id === id2) return `${css.card} ${css.big}`;
    return `${css.card}`;
  };

  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getTime = elemIndex => elemIndex * 0.2;

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div ref={ref} className={getStyles(isBig, id)}>
      <motion.div
        className={css.dataContainer__label}
        whileInView="onscreen"
        variants={{
          hidden: { opacity: 0, x: -700 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: getTime(index) },
          },
        }}
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
