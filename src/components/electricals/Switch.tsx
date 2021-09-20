import { FC, ReactElement, memo } from "react"
import { Switch as AntSwitch } from "antd"
import { Handle, Position } from "react-flow-renderer"

interface props {
  data: {
    on: boolean;
    onChange: (value: boolean) => void;
  }
}

export const Switch: FC<props> = memo(({ data: { onChange, on } }): ReactElement => {

  return (
    <div style={{
      background: '#9CA8B3',
      color: '#FFF',
      padding: 10,
    }}>
      <p>Switch</p>
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
    </div>
  )
});
