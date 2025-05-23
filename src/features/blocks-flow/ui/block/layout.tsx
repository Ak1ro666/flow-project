import type { Block } from '../../domain/block';
import type { BlockTypesRecord, PortConfig } from '../../domain/block-types';
import styles from './styles.module.css';

export function Layout({
    block,
    renderPort,
    blockTypesRecord,
}: {
    block: Block;
    blockTypesRecord: BlockTypesRecord;
    renderPort: (type: 'input' | 'output', port: PortConfig) => React.ReactNode;
}) {
    const blockType = blockTypesRecord[block.type];

    if (!blockType) {
        return null;
    }

    return (
        <div className={styles.root} style={{ left: block.x, top: block.y }}>
            {block.name}
            <div className={styles.ports}>
                <div className={styles.portsSlot}>
                    {blockType.inputs?.map((input) => renderPort('input', input))}
                </div>
                <div className={styles.portsSlot}>
                    {blockType.outputs?.map((output) => renderPort('output', output))}
                </div>
            </div>
        </div>
    );
}
