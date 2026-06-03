export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Coding Class',
    number: 'CS 1337',
    link: 'http://stanford.edu/',
    university: 'University of Houston',
  },
];

export default courses;
