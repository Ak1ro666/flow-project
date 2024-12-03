import { useLoad } from '../../../shared/libs/use-load';
import { processListApi } from '../api';

export type ProcessListItem = {
    id: string;
    name: string;
    onDelete?: (id: string) => void;
};

export function useList() {
    const { data: processList = [], isLoading, refetch } = useLoad(() => processListApi.list());

    const create = async (name: string) => {
        await processListApi.create(name);
        refetch();
    };

    const deleteProcess = async (id: string) => {
        await processListApi.delete(id);
        refetch();
    };

    const items = processList.map((item) => ({
        ...item,
        onDelete: () => deleteProcess(item.id),
    }));

    return {
        items,
        create,
        isLoading,
    } as const;
}
