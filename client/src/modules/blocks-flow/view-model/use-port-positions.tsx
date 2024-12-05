import { useCallback } from 'react';
import { Position } from '../domain/position';
import { create } from 'zustand';

type Store = {
    portPositions: Record<string, Position>;
    setPortPositions: (id: string, postion?: Position) => void;
};

const usePortPositionsStore = create<Store>((set) => ({
    portPositions: {},
    setPortPositions: (id: string, position?: Position) => {
        set((state) => {
            if (position) {
                return { portPositions: { ...state.portPositions, [id]: position } };
            }
            return state;
        });
    },
}));

export function usePortPositions() {
    return usePortPositionsStore((state) => state.portPositions);
}

export function usePortPositionsReader(id: string) {
    const setPortPositions = usePortPositionsStore((state) => state.setPortPositions);

    const callbackRef = useCallback(
        (ref: HTMLButtonElement | null) => {
            if (ref) {
                setPortPositions?.(id, {
                    x: ref.offsetLeft + ref.offsetWidth / 2,
                    y: ref.offsetTop + ref.offsetHeight / 2,
                });
            } else {
                setPortPositions?.(id);
            }
        },
        [id, setPortPositions],
    );

    return callbackRef;
}
