import { blocksFlowApi } from '../lib/api';
import {
    BlockTypes,
    BlockTypesRecord,
    getBlockTypesRecord,
} from '../domain/block-types';
import { create } from 'zustand';

type Store = {
    refetch: () => Promise<void>;
    isLoading: boolean;
    blockTypes: BlockTypes[];
    getData: () => BlockTypesRecord;
};

export const useBlockTypes = create<Store>((set, get) => {
    const fetchBlockTypes = () =>
        blocksFlowApi
            .getBlockTypes()
            .then((blockTypes) => set({ blockTypes }))
            .finally(() => set({ isLoading: false }));

    fetchBlockTypes();

    return {
        blockTypes: [],
        getData: () => getBlockTypesRecord(get().blockTypes),
        isLoading: true,
        refetch: fetchBlockTypes,
    } as const;
});
