import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './Project.module.css';

export const Project = ({ name, url, technologies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className={css.ProjectCard}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
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
            setIsOpen(true);
          }}
        >
          View More About it
        </button>

        <Modal
          handleClose={() => setIsOpen(false)}
          projectname={name}
          isOpen={isOpen}
        ></Modal>
      </div>
    </>
  );
};
