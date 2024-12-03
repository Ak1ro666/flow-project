export type BlockConfig = {
    id: string;
    name: string;
    type: string;

    data: string;

    y: number;
    x: number;

    inputs: Dependency[];
    outputs: Dependency[];
};

export type Dependency = {
    id: string;
    outputId: string;
    outputPort: string;
    inputId: string;
    inputPort: string;
};
