import { FC, ReactElement, memo } from "react"
import { Handle, Position } from "react-flow-renderer"
import { Typography } from 'antd'
import { ElectricalNode } from "../Node"

interface props {
  data: {
    on: boolean;
    label?: string;
  }
}

export const Fuse: FC<props> = memo(({ data: { on, label } }): ReactElement => {
  return (
    <ElectricalNode>
      {on ? 'Nyala' : 'Mati'}
      <Typography.Text style={{display: 'block'}}>{label}</Typography.Text>
      <Handle
        type="target"
        position={Position.Top}
        id="L2"
        style={{ left: '40%', borderRadius: 0 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="N2"
        style={{ left: '60%', borderRadius: 0 }}
      />
    </ElectricalNode>
  )
})
