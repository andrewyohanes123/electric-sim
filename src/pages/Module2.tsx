import { FC, ReactElement, useMemo, useState } from "react"
import { Elements } from "react-flow-renderer"
import FlowCanvas from "../components/FlowCanvas"

const Module2: FC = (): ReactElement => {
  const [state, toggleState] = useState<boolean>(false);
  
  document.title = "Modul 2"
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
      data: { on: true, label: 'Outlet Listrik'},
      position: { x: 500, y: 300 },
      type: 'outlet',
    },
    {
      id: '3',
      // you can also pass a React component as a label
      data: { on: state, onChange: toggleState },
      position: { x: 700, y: 200 },
      type: 'electricalSwitch',
    },
    {
      id: '4',
      // you can also pass a React component as a label
      data: { on: state, label: 'Lampu 2' },
      position: { x: 1000, y: 200 },
      type: 'output',
    },
    {
      id: '5',
      // you can also pass a React component as a label
      data: { on: state, label: 'Lampu 1' },
      position: { x: 1000, y: 23 },
      type: 'output',
    },
    {
      id: 'power-to-outlet', source: '1', animated: true, type: 'step', target: '2',
      sourceHandle: 'L1',
      label: "L1",
      style: {stroke: 'blue', strokeWidth: 2}
    },
    {
      id: 'power-to-outlet-2', source: '1', animated: true, type: 'step', target: '2',
      sourceHandle: 'PE',
      targetHandle: 'L',
      label: "PE",
      style: {stroke: 'brown', strokeWidth: 2}
    },
    {
      id: 'outlet-to-switch', source: '2', animated: true, type: 'step', target: '3',
      style: {stroke: 'red', strokeWidth: 2}
    },
    {
      id: 'switch-to-output-1', source: '3', animated: state, type: 'step', target: '4',
      targetHandle: 'L',
      style: {stroke: 'black'}
    },
    {
      id: 'output-1-to-output-2', source: '4', animated: state, type: 'step', target: '5',
      targetHandle: 'L',
      sourceHandle: 'N',
      style: {stroke: 'red'}
    },
    {
      id: 'output-2-to-power', source: '5', animated: state, type: 'step', target: '1',
      targetHandle: 'N',
      sourceHandle: 'N',
      label: "N",

    },
  ]), [state]);

  return (
    <div>
      <FlowCanvas elements={elements} />
    </div>
  )
}

export default Module2
