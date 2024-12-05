import styles from './styles.module.css';
import { BlockConfig } from '../../domain/block';
import { getPortId } from '../../domain/port';
import { Position, sumPosition } from '../../domain/position';

export function Layout({
    blocks,
    portPositions,
}: {
    blocks: BlockConfig[];
    portPositions: Record<string, Position>;
}) {
    let d = ``;

    const blocksRecord = blocks.reduce<Record<string, BlockConfig | undefined>>((acc, block) => {
        acc[block.id] = block;
        return acc;
    }, {});

    for (const block of blocks) {
        for (const input of block.inputs) {
            const inputPortId = getPortId({
                blockId: input.inputId,
                port: input.inputPort,
                type: 'input',
            });

            const outputPortId = getPortId({
                blockId: input.outputId,
                port: input.outputPort,
                type: 'output',
            });

            const inputPortPosition = portPositions?.[inputPortId];
            const outputPortPosition = portPositions?.[outputPortId];
            const inputBlock = blocksRecord[input.inputId];
            const outputBlock = blocksRecord[input.outputId];

            if (!inputPortPosition || !outputPortPosition || !inputBlock || !outputBlock) {
                continue;
            }
            const inputPosition = sumPosition(inputBlock, inputPortPosition);
            const outputPosition = sumPosition(outputBlock, outputPortPosition);

            d += `M ${inputPosition.x} ${inputPosition.y} L ${outputPosition.x} ${outputPosition.y}`;
        }
    }

    return (
        <svg className={styles.root}>
            <path d={d} fill="none" stroke="black" />
        </svg>
    );
}
