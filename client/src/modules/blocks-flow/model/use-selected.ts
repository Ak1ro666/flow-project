import { create } from 'zustand';
import { RelationId } from '../domain/block';

type Store = {
    selectedRelations: Record<RelationId, boolean>;
    toggleRelation: (id: RelationId) => void;
    getSelectedRelationsId: () => RelationId[];
};

export const useSelected = create<Store>((set, get) => ({
    selectedRelations: {},
    toggleRelation: (id) => {
        set({
            selectedRelations: {
                ...get().selectedRelations,
                [id]: !get().selectedRelations[id],
            },
        });
    },
    getSelectedRelationsId: () => {
        return Object.keys(get().selectedRelations).filter((id) => get().selectedRelations[id]);
    },
}));
