export type BlockPosition = {
    x: number;
    y: number;
};

export const BlockTypes = {
    Webhook: 'webhook',
    Start: 'start',
    End: 'end',
} as const;

export type BlockType = (typeof BlockTypes)[keyof typeof BlockTypes];
