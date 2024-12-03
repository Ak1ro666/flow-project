import { processApi } from '../api';
import { useLoad } from '../../../shared/libs/use-load';

export function useProcess(id: string) {
    return useLoad(() => processApi.getById(id));
}
