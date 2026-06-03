import Job from './Experience/Job';
import type { Position } from '@/data/resume/work';

interface ExperienceProps {
  data: Position[];
}

const Experience = ({ data }: ExperienceProps) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((job) => (
      <Job data={job} key={`${job.name}-${job.position}`} />
    ))}
  </div>
);

export default Experience;
