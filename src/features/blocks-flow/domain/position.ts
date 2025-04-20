export type Position = {
    x: number;
    y: number;
};

export const sumPosition = (position1: Position, position2: Position) => ({
    x: position1.x + position2.x,
    y: position1.y + position2.y,
});
