import { BlockTypes } from './domain/block-types';

async function getBlockTypes() {
    return await fetch('/api/blocks/types').then((res) => res.json() as Promise<BlockTypes[]>);
}

type CreateRelationBody = {
    outputId: string;
    outputPort: string;
    inputId: string;
    inputPort: string;
};

async function addRelation(data: CreateRelationBody) {
    return await fetch('/api/blocks/relation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

async function deleteRelation(id: string) {
    return await fetch(`/api/blocks/relation/${id}`, {
        method: 'DELETE',
    });
}

export const blocksFlowApi = {
    addRelation,
    deleteRelation,
    getBlockTypes,
};
