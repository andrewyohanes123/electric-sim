import { Typography, Slider } from "antd"
import { ElectricalNode } from "components/Node"
import { FC, ReactElement } from "react"
import { Handle, Position } from "react-flow-renderer"

interface props {
  data: {
    value: number;
    label?: string;
    onChange: (value: number) => void;
  }
}

const Dimmer: FC<props> = ({ data: { value, label, onChange } }): ReactElement => {
  return (
    <ElectricalNode>
      <Typography.Text>
        {label}
      </Typography.Text>
      <Typography.Text type="secondary">
        {Math.round((value ?? 0) * 100)}
      </Typography.Text>
      <Slider style={{width: 200}} onChange={onChange} value={value} step={0.01} max={1} min={0} />
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
}

export default Dimmer
