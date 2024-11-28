import { lazyImport } from '../utils/lazyImport';

export const Home = lazyImport(() => import('../pages/Home'));
export const PrivacyPolicy = lazyImport(() => import('../pages/PrivacyPolicy'));
export const DeveloperTools = lazyImport(() => import('../pages/DeveloperTools'));