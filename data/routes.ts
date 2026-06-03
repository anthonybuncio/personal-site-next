export interface Route {
  index?: boolean;
  label: string;
  path: string;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Anthony Buncio',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
