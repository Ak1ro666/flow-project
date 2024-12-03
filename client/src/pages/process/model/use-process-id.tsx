import { useParams } from 'react-router-dom';

export function useProcessId() {
    const { id } = useParams<{ id: string }>();

    return id!;
}
