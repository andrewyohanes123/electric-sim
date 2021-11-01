import { FC, ReactElement, useMemo, useState } from "react"
import { Elements } from "react-flow-renderer"
import FlowCanvas from "../components/FlowCanvas"

const Module10: FC = (): ReactElement => {
  const [state, toggleState] = useState<number>(0);

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
      type: 'dimmer', // input node
      data: { label: 'Q1', value: state, onChange: (value: number) => toggleState(value) },
      position: { x: 400, y: 250 },
    },
    {
      id: 'output2',
      type: 'fillamentOutput', // input node
      data: { label: 'E2', on: state },
      position: { x: 1200, y: 150 },
    },
    {
      id: 'output',
      type: 'outputDimmer', // input node
      data: { label: 'E1', value: state },
      position: { x: 1200, y: 13 },
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
      animated: state > 0
    },
    {
      id: 'q3-to-output2',
      target: 'output2',
      type: 'step',
      source: 'q1',
      sourceHandle: 'output',
      targetHandle: 'L2',
      style: { stroke: '#341f97', strokeWidth: 2 },
      animated: state > 0
    },
    {
      id: 'output-to-power',
      target: '1',
      type: 'step',
      source: 'output',
      sourceHandle: 'N2',
      targetHandle: 'N',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state > 0,
      label: 'N'
    },
    {
      id: 'output2-to-power',
      target: '1',
      type: 'step',
      source: 'output2',
      sourceHandle: 'N2',
      targetHandle: 'N',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state > 0,
      label: 'N'
    },
  ]), [state]);

  return (
    <div>
      <FlowCanvas elements={elements} />
    </div>
  )
}

export default Module10
