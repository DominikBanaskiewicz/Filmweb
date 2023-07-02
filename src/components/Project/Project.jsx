import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './Project.module.css';

export const Project = ({ name, url, technologies }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={css.ProjectCard}>
        <p className={css.ProjectCard__Name}>{name}</p>
        <a
          className={css.ProjectCard__Link}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <div>
          <p>
            {technologies.map(elem => {
              if (technologies.indexOf(elem) !== technologies.length - 1)
                return `${elem.toString()}, `;

              return `${elem.toString()}`;
            })}
          </p>
        </div>
        <button
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
