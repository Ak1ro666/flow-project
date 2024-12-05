import { blocksFlowApi } from '../api';
import { BlockTypes, BlockTypesRecord, getBlockTypesRecord } from '../domain/block-types';
import { create } from 'zustand';

type Store = {
    blockTypes: BlockTypes[];
    getData: () => BlockTypesRecord;
    isLoading: boolean;
    refetch: () => void;
};

export const useBlockTypes = create<Store>((set, get) => {
    const fetchBlockTypes = () => {
        blocksFlowApi.getBlockTypes().then((blockTypes) => {
            set({
                blockTypes,
                isLoading: false,
            });
        });
    };

    fetchBlockTypes();

    return {
        blockTypes: [],
        getData: () => {
            return getBlockTypesRecord(get().blockTypes);
        },
        isLoading: true,
        refetch: fetchBlockTypes,
    };
});
