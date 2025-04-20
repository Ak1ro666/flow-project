import { ComponentType, Ref, Suspense } from 'react';
import { ErrorBoundary } from './error-boundary';

function Loader() {
    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
            }}
        >
            Loading...
        </div>
    );
}

export function WithFallbacks<
    P extends {
        ref?: Ref<HTMLElement>;
        className?: string;
    },
>(Component: ComponentType<P>): ComponentType<P> {
    return function EnhancedComponent(props: P) {
        return (
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Component {...props} />
                </Suspense>
            </ErrorBoundary>
        );
    };
}
