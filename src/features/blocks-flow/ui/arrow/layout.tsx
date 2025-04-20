import type { Block, BlockId, Relation } from '../../domain/block';
import { getPortId, PortId } from '../../domain/port';

import { type Position, sumPosition } from '../../domain/position';

import styles from './styles.module.css';

export function Layout({
    blocksRecord,
    relation,
    portPositions,
    isSelection,
    onClick,
}: {
    blocksRecord: Record<BlockId, Block | undefined>;
    portPositions: Record<PortId, Position | undefined>;
    relation: Relation;
    onClick?: () => void;
    isSelection?: boolean;
}) {
    const inputPortId = getPortId({
        blockId: relation.inputId,
        port: relation.inputPort,
        type: 'input',
    });

    const outputPortId = getPortId({
        blockId: relation.outputId,
        port: relation.outputPort,
        type: 'output',
    });

    const inputPortPosition = portPositions?.[inputPortId];
    const outputPortPosition = portPositions?.[outputPortId];
    const inputBlock = blocksRecord[relation.inputId];
    const outputBlock = blocksRecord[relation.outputId];

    if (
        !inputPortPosition ||
        !outputPortPosition ||
        !inputBlock ||
        !outputBlock
    ) {
        return null;
    }

    const inputPosition = sumPosition(inputBlock, inputPortPosition);
    const outputPosition = sumPosition(outputBlock, outputPortPosition);

    const d = `M ${inputPosition.x} ${inputPosition.y} L ${outputPosition.x} ${outputPosition.y} `;

    return (
        <path
            d={d}
            fill="none"
            className={styles.arrow}
            stroke={isSelection ? 'blue' : 'black'}
            onClick={onClick}
        />
    );
}
