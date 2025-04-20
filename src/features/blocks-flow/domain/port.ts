import type { Block, BlockId } from './block';

export type PortId = string;

export type Port = {
    blockId: BlockId;
    type: 'input' | 'output';
    port: string;
};

export const portsAreEqual = (port1?: Port, port2?: Port) => {
    return (
        port1?.blockId === port2?.blockId &&
        port1?.port === port2?.port &&
        port1?.type === port2?.type
    );
};

export const portIsAlreadyInUse = (blocks?: Block[], port?: Port) => {
    const block = blocks?.find((block) => block.id === port?.blockId);

    if (block) {
        if (
            port?.type === 'input' &&
            block.inputs.some((input) => input.inputPort === port.port)
        ) {
            return true;
        }

        if (
            port?.type === 'output' &&
            block.outputs.some((output) => output.outputPort === port.port)
        ) {
            return true;
        }
    }

    return false;
};

export const isPortTypeSame = (port1?: Port, port2?: Port) =>
    port1?.type === port2?.type;

export const getPortId = (port: Port): PortId => {
    return `${port.blockId}:${port.type}:${port.port}`;
};
