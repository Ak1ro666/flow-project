import { Process } from '../domain/types';
import { processApi } from '../lib/api';
import { useLoad } from '@/shared/lib/use-load';

export function useProcess(processId: string) {
    return useLoad<Process>(() => processApi.getById(processId));
}
