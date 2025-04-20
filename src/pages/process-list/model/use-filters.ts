import { useDeferredValue, useState } from 'react';

export function useFilters(items: { id: string; name: string; onDelete?: () => void }[]) {
    const [q, setQ] = useState<string>('');

    const onQChange = (q: string) => {
        setQ(q);
    };
    const defferedQ = useDeferredValue(q);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(defferedQ.toLowerCase()),
    );

    return [filteredItems, { q, onQChange }] as const;
}
