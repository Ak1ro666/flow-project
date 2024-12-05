export type BlockId = string;
export type BlockConfig = {
    id: BlockId;
    name: string;
    type: string;

    data: string;

    y: number;
    x: number;

    inputs: Relation[];
    outputs: Relation[];
};

export type RelationId = string;
export type Relation = {
    id: RelationId;
    outputId: string;
    outputPort: string;
    inputId: string;
    inputPort: string;
};
