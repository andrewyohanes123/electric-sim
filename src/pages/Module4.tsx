import { FC, ReactElement, useMemo, useState } from "react"
import { Elements } from "react-flow-renderer"
import FlowCanvas from "../components/FlowCanvas"

const Module4: FC = (): ReactElement => {
  const [state, toggleState] = useState<boolean>(false);
  const [state2, toggleState2] = useState<boolean>(false);

  document.title = "Modul 3"
  const elements: Elements = useMemo<Elements>(() => ([
    {
      id: '1',
      type: 'powerSource', // input node
      data: { label: 'Input Node' },
      position: { x: 250, y: 50 },
    },
    {
      id: '2',
      // you can also pass a React component as a label
      data: { on: true, label: 'Outlet Listrik' },
      position: { x: 500, y: 300 },
      type: 'outlet',
    },
    {
      id: '3',
      // you can also pass a React component as a label
      data: { on: state, onChange: toggleState, label: 'Q1' },
      position: { x: 700, y: 200 },
      type: 'electricalSwitch',
    },
    {
      id: '4',
      // you can also pass a React component as a label
      data: { on: state || state2, label: 'E1' },
      position: { x: 1050, y: 20 },
      type: 'output',
    },
    {
      id: '5',
      // you can also pass a React component as a label
      data: { on: state2, onChange: toggleState2, label: 'Q2' },
      position: { x: 900, y: 200 },
      type: 'electricalSwitch',
    },
    {
      id: 'power-to-outlet', source: '1', animated: true, type: 'step', target: '2',
      sourceHandle: 'L1',
      label: "L1",
      style: { stroke: 'blue', strokeWidth: 2 }
    },
    {
      id: 'power-to-outlet-2', source: '1', animated: true, type: 'step', target: '2',
      sourceHandle: 'PE',
      targetHandle: 'L',
      label: "PE",
      style: { stroke: 'brown', strokeWidth: 2 }
    },
    {
      id: 'outlet-to-switch', source: '2', animated: true, type: 'step', target: '3',
      style: { stroke: 'red', strokeWidth: 2 }
    },
    {
      id: 'switch-1-to-switch-2', source: '3', animated: state || state2, type: 'step', target: '5',
      targetHandle: 'input',
      style: { stroke: 'black' }
    },
    {
      id: 'switch-2-to-output', source: '5', animated: state || state2, type: 'step', target: '4',
      targetHandle: 'L2',
      style: { stroke: 'blue' }
    },
    {
      id: 'output-to-power', source: '4', animated: state || state2, type: 'step', target: '1',
      targetHandle: 'N',
    },
  ]), [state, state2]);

  return (
    <div>
      <FlowCanvas elements={elements} />
    </div>
  )
}

export default Module4
