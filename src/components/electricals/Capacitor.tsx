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

export const Capacitor: FC<props> = memo(({ data: { on, label } }): ReactElement => {
  return (
    <ElectricalNode>
      <Typography.Text style={{display: 'block'}}>Kapasitor</Typography.Text>
      {on ? 'Nyala' : 'Mati'}
      <Typography.Text style={{display: 'block'}}>{label}</Typography.Text>
      <Handle
        type="target"
        position={Position.Top}
        id="N"
        style={{ left: '40%' }}
      />
      {/* <Handle
        type="target"
        position={Position.Top}
        id="L"
        style={{ left: '60%' }}
      /> */}
      <Handle
        type="source"
        position={Position.Right}
        id="N2"
        style={{ top: '60%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="L2"
        style={{ top: '40%' }}
      />
    </ElectricalNode>
  )
})
