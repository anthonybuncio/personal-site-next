'use client';

import { useState } from 'react';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';
import type { Skill, Category } from '@/data/resume/skills';

interface SkillsProps {
  skills: Skill[];
  categories: Category[];
}

const Skills = ({ skills, categories }: SkillsProps) => {
  const initialButtons: Record<string, boolean> = Object.fromEntries(
    [['All', false]].concat(categories.map(({ name }) => [name, false])),
  );

  const [buttons, setButtons] = useState(initialButtons);

  const handleChildClick = (label: string) => {
    const newButtons = Object.keys(buttons).reduce<Record<string, boolean>>((obj, key) => ({
      ...obj,
      [key]: (label === key) && !buttons[key],
    }), {});
    newButtons.All = !Object.keys(newButtons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getRows = () => {
    const actCat = Object.keys(buttons).reduce((cat, key) => (
      buttons[key] ? key : cat
    ), 'All');

    const comparator = (a: Skill, b: Skill) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    return [...skills].sort(comparator)
      .filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
      .map((skill) => (
        <SkillBar categories={categories} data={skill} key={skill.title} />
      ));
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
      </div>
      <div className="skill-button-container">
        {getButtons()}
      </div>
      <div className="skill-row-container">
        {getRows()}
      </div>
    </div>
  );
};

export default Skills;
