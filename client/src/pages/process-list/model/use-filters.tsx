import { useDeferredValue, useMemo, useState } from 'react';

export function useFilters(
    items: {
        id: string;
        name: string;
        onDelete?: () => void;
    }[],
) {
    const [name, setName] = useState<string>('');
    const deferredName = useDeferredValue(name);

    const filteredList = useMemo(
        () => items.filter((item) => item.name.toLowerCase().includes(deferredName.toLowerCase())),
        [items, name],
    );

    return [
        filteredList,
        {
            name,
            setName,
        },
    ] as const;
}
