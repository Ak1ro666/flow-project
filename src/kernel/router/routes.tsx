const AppRoutes = {
    HOME: 'home',
    PROCESS: 'process',
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const ROUTE_PATHS: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.PROCESS]: '/processes/',
} as const;
