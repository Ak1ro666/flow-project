import { BlockConfig } from '../../domain/block';
import { BlockTypesRecord, PortConfig } from '../../domain/block-types';
import styles from './styles.module.css';

export function Layout({
    block,
    blockTypesRecord,
    renderPort,
}: {
    block: BlockConfig;
    blockTypesRecord: BlockTypesRecord;
    renderPort?: (type: 'input' | 'output', data: PortConfig) => React.ReactNode;
}) {
    const blockType = blockTypesRecord[block.type];
    if (!blockType) {
        return null;
    }

    return (
        <div
            style={{
                left: block.x,
                top: block.y,
            }}
            className={styles.root}
        >
            {block.name}
            <div className={styles.ports}>
                <div className={styles.portSlot}>
                    {blockType.inputs?.map((input) => renderPort?.('input', input))}
                </div>
                <div className={styles.portSlot}>
                    {blockType.outputs?.map((output) => renderPort?.('output', output))}
                </div>
            </div>
        </div>
    );
}
