import { FC, ReactElement, memo } from "react"
import { Switch as AntSwitch } from "antd"
import { Handle, Position } from "react-flow-renderer"
import { ElectricalNode } from "../Node"

interface props {
  data: {
    on: boolean;
    onChange: (value: boolean) => void;
  }
}

export const Switch: FC<props> = memo(({ data: { onChange, on } }): ReactElement => {

  return (
    <ElectricalNode>
      <p>Saklar</p>
      <AntSwitch checked={on} onChange={onChange} />
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
    </ElectricalNode>
  )
});
