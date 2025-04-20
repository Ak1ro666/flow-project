import { ErrorPage } from '@/pages/error';
import { Component, ErrorInfo, Suspense } from 'react';

type ErrorBoundaryState = {
    hasError: boolean;
};

type ErrorBoundaryProps = {
    children: React.ReactNode;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback={<h3>Loader...</h3>}>
                    <ErrorPage />
                </Suspense>
            );
        }

        return this.props.children;
    }
}
