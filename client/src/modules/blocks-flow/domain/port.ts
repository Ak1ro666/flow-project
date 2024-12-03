import { BlockConfig } from './block';

export type Port = {
    blockId: string;
    type: 'input' | 'output';
    port: string;
};

export const portsAreEqual = (a?: Port, b?: Port) => {
    return a?.blockId === b?.blockId && a?.type === b?.type && a?.port === b?.port;
};

export const portIsAlreadyInUse = (blocks: BlockConfig[], port: Port) => {
    const block = blocks.find((block) => block.id === port.blockId);

    if (block) {
        if (port.type === 'input' && block.inputs.some((input) => input.inputPort === port.port)) {
            return true;
        }
    }

    if (block) {
        if (
            port.type === 'output' &&
            block.outputs.some((output) => output.outputPort === port.port)
        ) {
            return true;
        }
    }

    return false;
};

export const isPortTypesSame = (a?: Port, b?: Port) => {
    return a?.type === b?.type;
};

export const getPortId = (port: Port) => {
    return `${port.blockId}:${port.type}:${port.port}`;
};
