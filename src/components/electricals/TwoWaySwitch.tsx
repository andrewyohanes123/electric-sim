import { FC, ReactElement, memo, useMemo } from "react"
import { Switch as AntSwitch } from "antd"
import { Handle, Position } from "react-flow-renderer"
import { ElectricalNode } from "../Node"

interface props {
  data: {
    on: boolean;
    onChange: (value: boolean) => void;
    label?: string;
    multipleInput?: boolean;
    singleOutput?: boolean;
  }
}

export const TwoWaySwitch: FC<props> = memo(({ data: { onChange, on, label, multipleInput, singleOutput } }): ReactElement => {
  const isMultipleDefined: boolean = useMemo(() => typeof multipleInput !== 'undefined', [multipleInput]);
  const isSingleOutputDefiend: boolean = useMemo(() => typeof singleOutput !== 'undefined', [singleOutput]);

  return (
    <ElectricalNode>
      <p>{label ?? 'Saklar'}</p>
      <AntSwitch checked={on} onChange={onChange} />
      <Handle
        type="target"
        id="input1"
        position={Position.Left}
        style={{ top: isMultipleDefined ? multipleInput ? '35%' : '50%' : '50%', borderRadius: 0 }}
      />
      {
        (isMultipleDefined && multipleInput) &&
        <Handle
          type="target"
          id="input2"
          position={Position.Left}
          style={{ top: '70%', borderRadius: 0 }}
        />
      }
      <Handle
        type="source"
        id="output1"
        position={Position.Right}
        style={{ top: isSingleOutputDefiend ? singleOutput ? '50%' : '35%' : '35%', borderRadius: 0 }}
      />
      {
        (!isSingleOutputDefiend && !singleOutput) &&
        <Handle
          type="source"
          id="output2"
          position={Position.Right}
          style={{ top: '70%', borderRadius: 0 }}
        />}
    </ElectricalNode>
  )
});
