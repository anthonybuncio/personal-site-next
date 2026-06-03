export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Houston Community College',
    degree: 'B.S. Computer Science',
    link: 'https://www.hccs.edu/',
    year: 2020,
  },
  {
    school: 'The Iron Yard Houston',
    degree: 'Front End Engineering',
    link: 'https://www.coursereport.com/schools/the-iron-yard',
    year: 2017,
  },
];

export default degrees;
