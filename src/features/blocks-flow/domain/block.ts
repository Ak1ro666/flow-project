export type BlockId = string;
export type Block = {
    id: BlockId;
    name: string;
    type: string;

    data: string;

    x: number;
    y: number;

    inputs: Relation[];
    outputs: Relation[];
};

export type RelationId = string;
export type Relation = {
    id: RelationId;
    inputId: string;
    outputPort: string;
    outputId: string;
    inputPort: string;
};

export const getBlocksRecord = (
    blocks: Block[],
): Record<BlockId, Block | undefined> =>
    blocks.reduce((acc, block) => {
        acc[block.id] = block;
        return acc;
    }, {} as Record<BlockId, Block | undefined>);

export const getBlockRelations = (blocks: Block[]): Relation[] =>
    blocks.flatMap((block) => block.inputs);
