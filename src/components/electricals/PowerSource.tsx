import { FC, ReactElement } from "react"
import { Handle, Position } from "react-flow-renderer"
import { ElectricalNode } from "../Node"

export const PowerSource: FC = (): ReactElement => {
  return (
    <ElectricalNode>
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
    </ElectricalNode>
  )
}
