import { FC, ReactElement, memo } from "react"
import { Handle, Position } from "react-flow-renderer"
import { Typography } from 'antd'
import { ElectricalNode } from "../Node"
import { NeonOutputIndicator } from "../OutputIndicator"

interface props {
  data: {
    on: boolean;
    label?: string;
  }
}

export const NeonOutput: FC<props> = memo(({ data: { on, label } }): ReactElement => {
  return (
    <ElectricalNode>
      <NeonOutputIndicator indicator={on} />
      {on ? 'Nyala' : 'Mati'}
      <Typography.Text style={{display: 'block'}}>{label}</Typography.Text>
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
      <Handle
        type="source"
        position={Position.Bottom}
        id="L3"
        style={{ left: '40%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="N3"
        style={{ left: '60%', borderRadius: 0 }}
      />
    </ElectricalNode>
  )
})
