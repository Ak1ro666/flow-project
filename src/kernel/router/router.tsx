import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/app';

import { ProcessListPage } from '@/pages/process-list';
import { ProcessPage } from '@/pages/process';

import { ROUTE_PATHS } from './routes';

export const router = createBrowserRouter([
    {
        path: ROUTE_PATHS.home,
        element: <App />,
        children: [
            {
                index: true,
                element: <ProcessListPage />,
            },
            {
                path: `${ROUTE_PATHS.process}:id`,
                element: <ProcessPage />,
            },
        ],
    },
]);
