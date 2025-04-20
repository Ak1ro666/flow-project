export type Process = {
    id: string;
    name: string;
    blocks: Block[];
};

export type Block = {
    id: string;
    name: string;
    type: string;

    data: string;

    inputs: Dependency[];
    outputs: Dependency[];
} & BlockPosition;

export type Dependency = {
    id: string;
    inputId: string;
    outputPort: string;
    outputId: string;
    inputPort: string;
};

export type BlockPosition = {
    x: number;
    y: number;
};
