import { blocksFlowApi } from '../api';
import { BlockConfig } from '../domain/block';
import { isPortTypesSame, Port, portIsAlreadyInUse, portsAreEqual } from '../domain/port';
import { create } from 'zustand';

type Store = {
    selectedPort: Port | undefined;
    setSelectedPort: (port: Port) => void;
    isSelection: () => boolean;
    getIsSelectedPort: (port: Port) => boolean;
    getIsCanStartSelection: (port: Port, blocks: BlockConfig[]) => boolean;
    getIsCanEndSelection: (port: Port, blocks: BlockConfig[]) => boolean;
    unselectPort: () => void;
    selectPort: (port: Port, blocks: BlockConfig[], onSuccess?: () => void) => void;
};

export const useCreateRelation = create<Store>((set, get) => ({
    selectedPort: undefined,

    setSelectedPort: (port) => {
        set({ selectedPort: port });
    },

    isSelection: () => !!get().selectedPort,

    getIsSelectedPort: (port: Port) => {
        return !!get().selectedPort && portsAreEqual(port, get().selectedPort!);
    },

    getIsCanStartSelection: (port: Port, blocks: BlockConfig[]) => {
        return !get().selectedPort && !portIsAlreadyInUse(blocks, port);
    },

    getIsCanEndSelection: (port: Port, blocks: BlockConfig[]) => {
        return (
            !!get().setSelectedPort! &&
            !isPortTypesSame(port, get().selectedPort) &&
            !portIsAlreadyInUse(blocks, port)
        );
    },

    selectPort: (port, blocks, onSuccess) => {
        if (get().getIsCanStartSelection(port, blocks)) {
            set({ selectedPort: port });
            return;
        }

        if (get().getIsCanEndSelection(port, blocks)) {
            const selectedPort = get().selectedPort!;
            const params =
                port.type === 'input'
                    ? {
                          inputId: port.blockId,
                          inputPort: port.port,
                          outputId: selectedPort!.blockId,
                          outputPort: selectedPort!.port,
                      }
                    : {
                          inputId: selectedPort.blockId,
                          inputPort: selectedPort!.port,
                          outputId: port.blockId,
                          outputPort: port.port,
                      };

            return blocksFlowApi.addRelation(params).then(() => {
                get().unselectPort();
                onSuccess?.();
            });
        }
    },

    unselectPort: () => {
        set({ selectedPort: undefined });
    },
}));
