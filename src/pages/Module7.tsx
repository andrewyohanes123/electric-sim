import { FC, ReactElement, useMemo, useState } from "react"
import { Elements } from "react-flow-renderer"
import FlowCanvas from "../components/FlowCanvas"

const Module7: FC = (): ReactElement => {
  const [state, toggleState] = useState<boolean>(false);

  // document.title = "Modul 4"
  const elements: Elements = useMemo<Elements>(() => ([
    {
      id: '1',
      type: 'powerSource', // input node
      data: { label: 'Input Node' },
      position: { x: 250, y: 50 },
    },
    {
      id: 'x1',
      type: 'outlet', // input node
      data: { label: 'X3', on: true },
      position: { x: 750, y: 450 },
    },
    {
      id: 'q1',
      type: 'electricalSwitch', // input node
      data: { label: 'Q1', on: state, onChange: toggleState },
      position: { x: 400, y: 250 },
    },
    {
      id: 'output',
      type: 'neonOutput', // input node
      data: { label: 'E1', on: state },
      position: { x: 1200, y: 13 },
    },
    {
      id: 'fuse',
      type: 'fuse', // input node
      data: { label: 'S1', on: state },
      position: { x: 1275, y: 200 },
    },
    // handles
    {
      id: 'power-to-switch',
      target: 'q1',
      type: 'step',
      source: '1',
      sourceHandle: 'L1',
      style: { stroke: 'red' },
      animated: true
    },
    {
      id: 'power-to-outlet-1',
      target: 'x1',
      type: 'step',
      source: '1',
      sourceHandle: 'L1',
      targetHandle: 'L',
      style: { stroke: 'red' },
      animated: true,
      label: 'L1'
    },
    {
      id: 'power-to-outlet-2',
      target: 'x1',
      type: 'step',
      source: '1',
      sourceHandle: 'N',
      targetHandle: 'N',
      style: { stroke: 'black' },
      animated: true,
    },
    {
      id: 'power-to-outlet-3',
      target: 'x1',
      type: 'step',
      source: '1',
      sourceHandle: 'PE',
      targetHandle: 'PE',
      style: { stroke: 'brown' },
      animated: true,
      label: 'PE'
    },
    {
      id: 'q3-to-output',
      target: 'output',
      type: 'step',
      source: 'q1',
      sourceHandle: 'output',
      targetHandle: 'L2',
      style: { stroke: '#341f97', strokeWidth: 2 },
      animated: state
    },
    {
      id: 'output-to-power',
      target: '1',
      type: 'step',
      source: 'output',
      sourceHandle: 'N2',
      targetHandle: 'N',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state,
      label: 'N'
    },
    {
      id: 'output-to-fuse',
      target: 'fuse',
      type: 'step',
      source: 'output',
      sourceHandle: 'N3',
      targetHandle: 'N2',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state,
      label: 'N'
    },
    {
      id: 'output-to-fuse-2',
      target: 'fuse',
      type: 'step',
      source: 'output',
      sourceHandle: 'L3',
      targetHandle: 'L2',
      style: { stroke: 'brown', strokeWidth: 2 },
      animated: state,
      label: 'L'
    },
  ]), [state]);

  return (
    <div>
      <FlowCanvas elements={elements} />
    </div>
  )
}

export default Module7
