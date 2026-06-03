import { Icon, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export interface ContactItem {
  link: string;
  label: string;
  icon: Icon;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/anthonybuncio',
    label: 'Github',
    icon: IconBrandGithub,
  },
  {
    link: 'https://linkedin.com/in/anthonybuncio1/',
    label: 'LinkedIn',
    icon: IconBrandLinkedin,
  },
  {
    link: 'mailto:anthonybuncio.work@gmail.com',
    label: 'Email',
    icon: IconMail,
  },
];

export default data;
