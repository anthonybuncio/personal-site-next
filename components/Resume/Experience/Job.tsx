import { format } from 'date-fns';
import Markdown from 'markdown-to-jsx';

import type { Position } from '@/data/resume/work';

interface JobProps {
  data: Position;
}

const Job = ({ data: { name, position, url, startDate, endDate, summary, highlights } }: JobProps) => (
  <article className="jobs-container">
    <header>
      <h4><a href={url}>{name}</a> - {position}</h4>
      <p className="daterange">
        {format(new Date(startDate), 'MMMM yyyy')} - {endDate ? format(new Date(endDate), 'MMMM yyyy') : 'PRESENT'}
      </p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

export default Job;
