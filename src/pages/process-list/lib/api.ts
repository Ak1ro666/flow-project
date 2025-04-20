import { ProcessListItem } from '../domain/types';

export namespace api {
    export async function list() {
        return await fetch('/api/processes').then(
            (res) => res.json() as Promise<ProcessListItem[]>,
        );
    }

    export async function create(name: string) {
        return await fetch('/api/processes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
    }

    export async function remove(id: string) {
        return await fetch(`/api/processes/${id}`, {
            method: 'DELETE',
        });
    }
}
