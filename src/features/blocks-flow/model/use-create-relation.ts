import { Block } from '../domain/block';
import { isPortTypeSame, Port, portIsAlreadyInUse } from '../domain/port';
import { portsAreEqual } from '../domain/port';
import { create } from 'zustand';
import { blocksFlowApi } from '../lib/api';

type Store = {
    selectedPort: Port | undefined;
    setSelectedPort: (port: Port | undefined) => void;
    isSelection: () => boolean;
    getIsSelectedPort: (port: Port) => boolean;
    unselectPort: () => void;
    getIsCanStartSelection: (port: Port, blocks: Block[]) => boolean;
    getIsCanEndSelection: (port: Port, blocks: Block[]) => boolean;
    selectPort: (port: Port, blocks: Block[], onSuccess?: () => void) => void;
};

export const useCreateRelation = create<Store>((set, get) => ({
    selectedPort: undefined,
    setSelectedPort: (port) => set({ selectedPort: port }),
    isSelection: () => !!get().selectedPort,

    getIsSelectedPort: (port) =>
        !!get().selectedPort && portsAreEqual(port, get().selectedPort),

    getIsCanStartSelection: (port: Port, blocks: Block[]) =>
        !get().selectedPort && !portIsAlreadyInUse(blocks, port),

    getIsCanEndSelection: (port: Port, blocks: Block[]) =>
        !!get().selectedPort &&
        !portIsAlreadyInUse(blocks, port) &&
        !isPortTypeSame(get().selectedPort, port),

    unselectPort: () => set({ selectedPort: undefined }),

    selectPort: (port: Port, blocks: Block[], onSuccess?: () => void) => {
        const selectedPort = get().selectedPort;

        if (get().getIsCanStartSelection(port, blocks)) {
            set({ selectedPort: port });
            return;
        }

        if (get().getIsCanEndSelection(port, blocks)) {
            const params =
                port.type === 'input'
                    ? {
                          inputId: port.blockId,
                          inputPort: port.port,
                          outputId: selectedPort!.blockId,
                          outputPort: selectedPort!.port,
                      }
                    : {
                          inputId: selectedPort!.blockId,
                          inputPort: selectedPort!.port,
                          outputId: port.blockId,
                          outputPort: port.port,
                      };

            return blocksFlowApi.addRelation(params).then(() => {
                set({ selectedPort: undefined });
                onSuccess?.();
            });
        }
    },
}));
