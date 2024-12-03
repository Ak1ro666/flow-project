import { blocksFlowApi } from '../api';
import { BlockTypes, BlockTypesRecord, getBlockTypesRecord } from '../domain/block-types';
import { create } from 'zustand';

type Store = {
    blockTypes: BlockTypes[];
    getData: () => BlockTypesRecord;
    isLoading: boolean;
    setBlocks: (block: BlockTypes) => void;
    refetch: () => void;
};

export const useBlockTypes = create<Store>((set, get) => {
    const fetchBlockTypes = () => {
        return blocksFlowApi.getBlockTypes().then((blockTypes) => {
            set({
                blockTypes,
                isLoading: false,
            });
        });
    };

    fetchBlockTypes();

    return {
        blockTypes: [],
        setBlocks: () => {},
        getData: () => {
            return getBlockTypesRecord(get().blockTypes);
        },
        isLoading: true,
        refetch: fetchBlockTypes,
    };
});
