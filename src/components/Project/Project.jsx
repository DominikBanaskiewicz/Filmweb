import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './Project.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export const Project = ({ name, url, technologies, imageUrl, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const closeOnClick = e => {
    if (e.target.id === 'backdrop') {
      setIsOpen(false);
      document.body.removeEventListener('mousedown', closeOnClick);
    }
  };
  const handleMouseClickWhenModalOpen = () => {
    setIsOpen(true);
    document.body.addEventListener('mousedown', closeOnClick);
  };
  // motion code
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
      x: window.innerWidth * 0.25,
      transition: { duration: 0.5, delay: 0.1 },
    },
  };
  const right = {
    hidden: { opacity: 0, x: 700 },
    visible: {
      opacity: 1,
      x: -(window.innerWidth * 0.25),
      transition: { duration: 0.5, delay: 0.1 },
    },
  };
  return (
    <div ref={ref} className={css.ProjectCard}>
      <motion.div
        className={css.dataContainer__label}
        whileInView="onscreen"
        variants={index % 2 === 0 ? left : right}
        initial="hidden"
        animate={mainControls}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        <p className={css.ProjectCard__Name}>{name}</p>

        <div>
          <p>
            {technologies.map(elem => {
              if (technologies.indexOf(elem) !== technologies.length - 1)
                return `${elem.toString()}, `;

              return `${elem.toString()}`;
            })}
          </p>
        </div>
        {isHovering && (
          <a
            className={css.ProjectCard__Link}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        )}
        <button
          className={css.ProjectCard_MoreBtn}
          onClick={e => {
            e.preventDefault();
            handleMouseClickWhenModalOpen();
          }}
        >
          View More About it
        </button>

        <Modal
          handleClose={() => setIsOpen(false)}
          projectname={name}
          isOpen={isOpen}
          imageUrl={imageUrl}
        ></Modal>
      </motion.div>
    </div>
  );
};
