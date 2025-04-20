import { Position } from '../domain/position';
import { BlockId } from '../domain/block';
import { create } from 'zustand';
import { useCallback } from 'react';

type Store = {
    portPositions: Record<BlockId, Position>;
    setPortPosition: (id: string, position?: Position) => void;
};

const usePortPositionsStore = create<Store>((set, get) => ({
    portPositions: {},
    setPortPosition: (id: string, position?: Position) => {
        if (position) {
            set({
                portPositions: {
                    ...get().portPositions,
                    [id]: position,
                },
            });
        }
    },
}));

export function usePortPositions() {
    return usePortPositionsStore((store) => store.portPositions);
}

export function usePortPositionsReader(id: string) {
    const setPortPosition = usePortPositionsStore(
        (state) => state.setPortPosition,
    );

    const callbackRef = useCallback(
        (ref: HTMLButtonElement | null) => {
            if (ref) {
                setPortPosition?.(id, {
                    x: ref.offsetLeft + ref.offsetWidth / 2,
                    y: ref.offsetTop + ref.offsetHeight / 2,
                });
            } else {
                setPortPosition?.(id);
            }
        },
        [id, setPortPosition],
    );

    return callbackRef;
}
