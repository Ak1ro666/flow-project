import { create } from 'zustand';
import { RelationId } from '../domain/block';

type Store = {
    selectedRelations: Record<RelationId, boolean>;
    toggleRelation: (id: RelationId) => void;
    getSelectedRelationsArrow: () => RelationId[];
};

export const useSelected = create<Store>((set, get) => ({
    selectedRelations: {},
    toggleRelation: (id: RelationId) =>
        set({
            selectedRelations: {
                ...get().selectedRelations,
                [id]: !get().selectedRelations[id],
            },
        }),
    getSelectedRelationsArrow: () =>
        Object.keys(get().selectedRelations).filter(
            (id) => get().selectedRelations[id],
        ),
}));
