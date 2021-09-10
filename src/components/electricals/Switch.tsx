import { FC, ReactElement } from "react"
import { Handle, Position } from "react-flow-renderer"

export const Switch: FC = (): ReactElement => {
  return (
    <div style={{
      background: '#9CA8B3',
      color: '#FFF',
      padding: 10,
    }}>
      <p>Switch</p>
      <Handle
        type="target"
        id="input"
        position={Position.Left}
        style={{ top: '50%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        id="output"
        position={Position.Right}
        style={{ top: '50%', borderRadius: 0 }}
      />
    </div>
  )
}
