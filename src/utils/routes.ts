export interface Route {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

const routes: Route[] = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly'
  },
  {
    path: '/privacy-policy',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    path: '/developer-tools',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    path: '/license',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    path: '/docs',
    priority: 0.9,
    changefreq: 'weekly'
  }
];

export default routes;