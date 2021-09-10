import { FC, ReactElement } from "react"
import { Handle, Position } from "react-flow-renderer"

export const PowerSource: FC = (): ReactElement => {
  return (
    <div style={{
      background: '#9CA8B3',
      color: '#FFF',
      padding: 10,
    }}>
      <p>Sumber Daya</p>
      <Handle
        type="source"
        position={Position.Right}
        id="N"
        style={{ top: '20%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="PE"
        style={{ top: '50%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="L1"
        style={{ top: '80%', borderRadius: 0 }}
      />
    </div>
  )
}
