import { FC, ReactElement, memo } from "react"
import { Handle, Position } from "react-flow-renderer"
import { ElectricalNode } from "../Node"
import { OutputIndicator } from "../OutputIndicator"

interface props {
  data: {
    on: boolean;
  }
}

export const Output: FC<props> = memo(({ data: { on } }): ReactElement => {
  return (
    <ElectricalNode>
      <OutputIndicator indicator={on} />
      {on ? 'Nyala' : 'Mati'}
      <Handle
        type="source"
        position={Position.Left}
        id="N2"
        style={{ top: '40%', borderRadius: 0 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="L2"
        style={{ top: '60%', borderRadius: 0 }}
      />
    </ElectricalNode>
  )
})
