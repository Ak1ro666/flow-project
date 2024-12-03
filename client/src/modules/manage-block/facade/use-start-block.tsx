import { useCreateBlock } from '../model/use-create-block';

export const useStartCreate = () => {
    return useCreateBlock((state) => state.startCreate);
};
