import { FC, ReactElement, useMemo, useState } from "react"
import { Elements } from "react-flow-renderer"
import FlowCanvas from "../components/FlowCanvas"

const Module9: FC = (): ReactElement => {
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
      id: 'capacitor',
      type: 'capacitor', // input node
      data: { label: 'C1', on: state },
      position: { x: 975, y: 190 },
    },
    {
      id: 'output1',
      type: 'neonOutput', // input node
      data: { label: 'E1', on: state },
      position: { x: 1200, y: 400 },
    },
    {
      id: 'fuse1',
      type: 'fuse', // input node
      data: { label: 'S1', on: state },
      position: { x: 1275, y: 555 },
    },
    {
      id: 'output2',
      type: 'neonOutput', // input node
      data: { label: 'E2', on: state },
      position: { x: 1200, y: 13 },
    },
    {
      id: 'fuse2',
      type: 'fuse', // input node
      data: { label: 'S2', on: state },
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
      id: 'q3-to-capactor',
      target: 'capacitor',
      type: 'step',
      source: 'q1',
      sourceHandle: 'output',
      targetHandle: 'L2',
      style: { stroke: '#341f97', strokeWidth: 2 },
      animated: state
    },
    {
      id: 'capacitor-to-e1',
      target: 'output1',
      type: 'step',
      source: 'capacitor',
      sourceHandle: 'N2',
      targetHandle: 'L',
      style: { stroke: 'brown', strokeWidth: 2 },
      animated: state
    },
    {
      id: 'capacitor-to-e2',
      target: 'output2',
      type: 'step',
      source: 'capacitor',
      sourceHandle: 'N2',
      targetHandle: 'L',
      style: { stroke: 'red', strokeWidth: 2 },
      animated: state
    },
    {
      id: 'capacitor-to-power',
      target: 'capacitor',
      type: 'step',
      source: '1',
      sourceHandle: 'N',
      targetHandle: 'N',
      style: { stroke: 'blue', strokeWidth: 1 },
      animated: state
    },
    {
      id: 'output-to-power',
      target: '1',
      type: 'step',
      source: 'output2',
      sourceHandle: 'N2',
      targetHandle: 'N',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state,
      label: 'N'
    },
    {
      id: 'output-to-power-2',
      target: '1',
      type: 'step',
      source: 'output1',
      sourceHandle: 'N2',
      targetHandle: 'N',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state,
      label: 'N'
    },
    {
      id: 'output-to-fuse',
      target: 'fuse1',
      type: 'step',
      source: 'output1',
      sourceHandle: 'N3',
      targetHandle: 'N2',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state,
      label: 'N'
    },
    {
      id: 'output-to-fuse-2',
      target: 'fuse1',
      type: 'step',
      source: 'output1',
      sourceHandle: 'L3',
      targetHandle: 'L2',
      style: { stroke: 'brown', strokeWidth: 2 },
      animated: state,
      label: 'L'
    },
    {
      id: 'output2-to-fuse2',
      target: 'fuse2',
      type: 'step',
      source: 'output2',
      sourceHandle: 'N3',
      targetHandle: 'N2',
      style: { stroke: 'black', strokeWidth: 2 },
      animated: state,
      label: 'N'
    },
    {
      id: 'output2-to-fuse2-2',
      target: 'fuse2',
      type: 'step',
      source: 'output2',
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

export default Module9
