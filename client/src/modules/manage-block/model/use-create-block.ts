import { manageBlockApi } from '../api';
import { create } from 'zustand';
import { BlockPosition } from './types';

type CreateBlockData = {
    name: string;
    type: string;
    data: string;
    processId: string;
};

type Store = {
    isCreating: boolean;
    createPosition: BlockPosition | null;
};

type Actions = {
    startCreate: (data: BlockPosition) => void;
    submitCreate: (data: CreateBlockData) => Promise<unknown>;
    cancelCreate: () => void;
};

export const useCreateBlock = create<Store & Actions>((set, get) => ({
    createPosition: null,
    isCreating: false,
    cancelCreate: () => set({ createPosition: null }),
    startCreate: (data) => set({ createPosition: data }),
    submitCreate: async (data) => {
        const createPosition = get().createPosition;
        if (!createPosition) {
            return;
        }

        set({ isCreating: true });
        return manageBlockApi
            .createBlock({
                ...data,
                ...createPosition,
            })
            .finally(() => {
                set({ isCreating: false, createPosition: null });
            });
    },
}));
