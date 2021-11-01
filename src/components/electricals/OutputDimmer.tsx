import { Typography } from "antd"
import { ElectricalNode } from "components/Node"
import { OutputIndicator } from "components/OutputIndicator"
import { FC, ReactElement } from "react"
import { Handle, Position } from "react-flow-renderer"

interface props {
  data: {
    value: number;
    label?: string;
  }
}

const OutputDimmer: FC<props> = ({data: {label, value}}): ReactElement => {
  return (
    <ElectricalNode>
      <OutputIndicator indicator={true} style={{ opacity: value }} />      
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
    </ElectricalNode>
  )
}

export default OutputDimmer
