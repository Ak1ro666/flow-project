export type BlockTypes = {
    type: string;
    label: string;
    inputs: PortConfig[];
    outputs: PortConfig[];
};

export type PortConfig = {
    port: string;
    label: string;
};

export type BlockTypesRecord = Record<string, BlockTypes | undefined>;

export const getBlockTypesRecord = (blockTypes: BlockTypes[]) =>
    blockTypes.reduce((acc, blockType) => {
        acc[blockType.type] = blockType;
        return acc;
    }, {} as BlockTypesRecord);
