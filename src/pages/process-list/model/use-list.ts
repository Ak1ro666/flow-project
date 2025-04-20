import { api } from '../lib/api';
import { ProcessListItem } from '../domain/types';

import { useLoad } from '@/shared/lib/use-load';

export function useList() {
    const {
        data: processList = [],
        isLoading,
        refetch,
    } = useLoad<ProcessListItem[]>(api.list);

    const create = async (name: string) => {
        await api.create(name).finally(() => refetch());
    };

    const deleteProcess = (id: string) => async () => {
        await api.remove(id).finally(() => refetch());
    };

    const items = processList.map((item) => ({
        ...item,
        onDelete: deleteProcess(item.id),
    }));

    return {
        items,
        create,
        isLoading,
    } as const;
}
