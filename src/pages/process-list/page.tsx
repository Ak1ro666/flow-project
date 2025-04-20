import { Root } from './ui/root';
import { CreateForm } from './ui/create-form';
import { Card } from './ui/card';
import { Filters } from './ui/filters';

import { useList } from './model/use-list';
import { useFilters } from './model/use-filters';

export function Page() {
    const list = useList();
    const [filteredItems, filters] = useFilters(list.items);

    return (
        <Root
            createForm={<CreateForm onSubmit={list.create} />}
            filters={<Filters q={filters.q} onQChange={filters.onQChange} />}
            cards={filteredItems.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    onDelete={item.onDelete}
                />
            ))}
            isLoading={list.isLoading}
        />
    );
}
