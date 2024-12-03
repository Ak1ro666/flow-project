export type Process = {
    id: string;
    name: string;
    blocks: Block[];
};

export type BlockPosition = {
    y: number;
    x: number;
};

type Block = {
    id: string;
    name: string;
    type: string;

    data: string;

    y: number;
    x: number;

    inputs: Dependency[];
    outputs: Dependency[];
} & BlockPosition;

export type Dependency = {
    id: string;
    outputId: string;
    outputPort: string;
    inputId: string;
    inputPort: string;
};
