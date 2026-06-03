import { faLinkedinIn, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/anthonybuncio',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://linkedin.com/in/anthonybuncio1/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:anthonybuncio.work@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
