import { format } from 'date-fns';

import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

const Cell = ({ data }: CellProps) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{format(new Date(data.date), 'MMMM, yyyy')}</time>
      </header>
      <a href={data.link} target="_blank" rel="noreferrer" className="image">
        <img src={data.image} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
