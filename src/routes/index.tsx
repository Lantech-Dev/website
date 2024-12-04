import { lazyImport } from '../utils/lazyImport';

export const Home = lazyImport(() => import('../pages/Home'));
export const PrivacyPolicy = lazyImport(() => import('../pages/PrivacyPolicy'));
export const DeveloperTools = lazyImport(() => import('../pages/DeveloperTools'));
export const License = lazyImport(() => import('../pages/License'));
export const Documentation = lazyImport(() => import('../pages/Documentation'));