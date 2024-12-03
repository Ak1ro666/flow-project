import { Position } from '../domain/position';
import { create } from 'zustand';

type Store = {
    portPositions: Record<string, Position>;
    setPortPositions: (id: string, postion?: Position) => void;
};

export const usePortPositions = create<Store>((set) => ({
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
