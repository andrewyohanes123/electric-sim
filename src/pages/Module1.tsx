import { useState, useMemo } from "react";
import { Elements } from "react-flow-renderer/dist/types";
import FlowCanvas from "../components/FlowCanvas";

const Module1 = () => {
  const [state, toggleState] = useState<boolean>(false);

  document.title = "Modul 1"

  const elements: Elements = useMemo<Elements>(() => ([
    {
      id: '1',
      type: 'powerSource', // input node
      data: { label: 'Input Node' },
      position: { x: 250, y: 50 },
    },
    // default node
    {
      id: '2',
      // you can also pass a React component as a label
      data: { on: state, onChange: toggleState },
      position: { x: 700, y: 200 },
      type: 'electricalSwitch',
    },
    {
      id: '3',
      type: 'output', // output node
      data: { on: state },
      position: { x: 1000, y: 25 },
    },
    // animated edge
    {
      id: 'power-to-switch', source: '1', animated: true, type: 'step', target: '2',
      sourceHandle: 'L1',
    },
    {
      id: 'switch-to-output', source: '2', animated: state, type: 'step', target: '3'
    },
    {
      id: 'output-to-power', source: '3', animated: state, type: 'step', target: '1',
      targetHandle: 'N'
    },
    // { id: 'e1-2', source: '1', target: '2', animated: true, type: 'step', style: {color: 'red', border: '1px solid red', background: 'red'} },
    // { id: 'e2-3', source: '2', target: '3' },
  ]), [state]);

  return (
    <div>
      <FlowCanvas
        elements={elements}
      />
    </div>
  )
}

export default Module1
