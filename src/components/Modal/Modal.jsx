import { useEffect } from 'react';
import { ReactPortal } from 'components/Portal/Portal';
import { projectsDatas } from 'data';
import css from './Modal.module.css';

const Modal = ({ projectname, isOpen, handleClose }) => {
  const projectsData = projectsDatas;
  useEffect(() => {
    const closeOnEscapeKey = e => (e.key === 'Escape' ? handleClose() : null);

    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  const result = projectsData.filter(elem => elem.name === projectname)[0];

  return (
    <ReactPortal wrapperId="root">
      <div className={css.modal}>
        <button onClick={handleClose} className={css.close_btn}>
          Close it
        </button>

        <div className={css.modal_content}>
          <div className={css.modal_image}>
            <img
              src="https://olivernorden.se/assets/Uploads/on__ScaleMaxWidthWzEyMDBd.png"
              alt=""
            />
          </div>
          <div className={css.modal_label}>
            <h2>{result.name} </h2>
            <a href={result.demo_url} target="_blank" rel="noopener noreferrer">
              Demo version
            </a>
            <p>{result.descriptin}</p>
            <h3>Used tech</h3>
            <p>
              {result.technologies.map(elem => {
                if (
                  result.technologies.indexOf(elem) !==
                  result.technologies.length - 1
                )
                  return `${elem.toString()}, `;

                return `${elem.toString()}`;
              })}
            </p>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
export default Modal;
