import { useCreateBlock } from '../model/use-create-block';

export function useStartCreate() {
    return useCreateBlock((store) => store.startCreate);
}
