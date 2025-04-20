import { createContext, ReactNode, useContext } from 'react';

export function createStrictContext<T>() {
    const context = createContext<T | null>(null);

    const Provider = ({
        children,
        value,
    }: {
        children: ReactNode;
        value: T;
    }) => {
        return <context.Provider value={value}>{children}</context.Provider>;
    };

    const useStrictContext = () => {
        const data = useContext(context);

        if (!data) {
            throw new Error('useContext must be used within a Provider');
        }

        return data;
    };

    return { Provider, use: useStrictContext };
}

export function createHookContext<T>(hook: () => T) {
    const context = createStrictContext<T>();

    const Provider = ({ children }: { children: ReactNode }) => {
        const data = hook();

        return <context.Provider value={data}>{children}</context.Provider>;
    };

    return { Provider, use: context.use };
}
