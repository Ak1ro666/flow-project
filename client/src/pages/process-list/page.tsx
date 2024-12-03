import { useFilters, useList } from './model';
import { CreateForm } from './ui/create-form';
import { Card } from './ui/card';
import { Root } from './ui/root';
import { Filters } from './ui/filters';

export function Page() {
    const list = useList();
    const [filteredList, filters] = useFilters(list.items);

    return (
        <Root
            isLoading={list.isLoading}
            filters={<Filters name={filters.name} onNameChange={filters.setName} />}
            createForm={<CreateForm onSubmit={list.create} />}
            cards={filteredList.map((item) => (
                <Card key={item.id} id={item.id} name={item.name} onDelete={item.onDelete} />
            ))}
        />
    );
}
