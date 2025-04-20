import type { RelationId } from '../domain/block';
import type { BlockTypes } from '../domain/block-types';

type CreateRelationBodyDto = {
    inputId: string;
    outputId: string;
    inputPort: string;
    outputPort: string;
};

export namespace blocksFlowApi {
    export async function getBlockTypes() {
        return await fetch('/api/blocks/types').then(
            (res) => res.json() as Promise<BlockTypes[]>,
        );
    }
    export async function addRelation(data: CreateRelationBodyDto) {
        return await fetch('/api/blocks/relation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    export async function deleteRelation(id: RelationId) {
        await fetch(`/api/blocks/relation/${id}`, {
            method: 'DELETE',
        });
    }
}
