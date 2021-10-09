import { Typography } from "antd"
import { FC, ReactElement, memo } from "react"
import { Handle, Position } from "react-flow-renderer"
import { ElectricalNode } from "../Node"
import { OutputIndicator } from "../OutputIndicator"

interface props {
  data: {
    on: boolean;
    label?: string;
  }
}

export const Outlet: FC<props> = memo(({ data: { on, label } }): ReactElement => {
  return (
    <ElectricalNode>
      <OutputIndicator indicator={on} />
      {on ? 'Nyala' : 'Mati'}
      <Typography.Text style={{display: 'block'}}>{label}</Typography.Text>
      <Handle
        type="source"
        position={Position.Top}
        id="N"
        style={{ left: '25%', borderRadius: 0 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="PE"
        style={{ left: '50%', borderRadius: 0 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="L"
        style={{ left: '75%', borderRadius: 0 }}
      />
    </ElectricalNode>
  )
})

Outlet.defaultProps = {
  data: {
    on: false,
    label: 'Outlet Listrik'
  }
}