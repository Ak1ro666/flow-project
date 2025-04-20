import { lazy } from 'react';

export const ErrorPage = lazy(() => import('./page').then((module) => ({ default: module.Page })));
