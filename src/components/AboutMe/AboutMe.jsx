import * as React from 'react';
import { Project } from 'components/Project/Project';
import css from './AboutMe.module.css';
import { projectsDatas } from 'data';

export const AboutMe = () => {
  const projectsData = projectsDatas;
  return (
    <>
      <h2 className={css.project__header}>Some selected project</h2>
      <div className={css.abc}>
        <div className={css.project__container}>
          {projectsData.map(project => (
            <div id={project.name} key={project.id}>
              <Project
                key={project.id}
                name={project.name}
                url={project.url}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
              ></Project>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
