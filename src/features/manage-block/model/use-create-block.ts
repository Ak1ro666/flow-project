import { manageBlockApi } from '../lib/api';
import { BlockPosition, BlockType } from '../domain/types';
import { create } from 'zustand';

type CreateBlockData = {
    data: string;
    name: string;
    type: BlockType;
    processId: string;
};

type Store = {
    isCreating: boolean;
    createPosition: BlockPosition | null;
    startCreate: (data: BlockPosition) => void;
    cancelCreate: () => void;
    submitCreate: (data: CreateBlockData) => Promise<unknown>;
};

export const useCreateBlock = create<Store>((set, get) => ({
    isCreating: false,
    createPosition: null,
    startCreate: (data) => set({ isCreating: true, createPosition: data }),
    cancelCreate: () => set({ isCreating: false, createPosition: null }),
    submitCreate: async (data) => {
        const createPosition = get().createPosition;

        if (!createPosition) {
            return;
        }

        set({ isCreating: true });

        return manageBlockApi
            .createBlock({ ...data, ...createPosition })
            .finally(() => {
                set({ isCreating: false });
                set({ createPosition: null });
            });
    },
}));
