import * as React from 'react';
import { Project } from 'components/Project/Project';
import css from './AboutMe.module.scss';
import { projectsDatas } from 'data';

export const AboutMe = () => {
  const projectsData = projectsDatas;
  return (
    <div className={css.test}>
      <h2 className={css.project__header}>Some selected project</h2>
      <div className={css.project__container}>
        {projectsData.map((project, index) => (
          <Project
            index={index}
            key={project.id}
            name={project.name}
            url={project.url}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
          ></Project>
        ))}
      </div>
    </div>
  );
};
