import { FC, ReactElement, useMemo, useState } from "react"
import { Elements } from "react-flow-renderer"
import FlowCanvas from "../components/FlowCanvas"

const Module4: FC = (): ReactElement => {
  const [state, toggleState] = useState<boolean>(false);
  const [state2, toggleState2] = useState<boolean>(false);
  const [state3, toggleState3] = useState<boolean>(false);

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
      data: { label: 'X4', on: true },
      position: { x: 750, y: 450 },
    },  
    {
      id: 'q1',
      type: 'twoWaySwitch', // input node
      data: { label: 'Q1', on: state, onChange: toggleState },
      position: { x: 400, y: 250 },
    },
    {
      id: 'q2',
      type: 'twoWaySwitch', // input node
      data: { label: 'Q2', multipleInput: true, on: state2, onChange: toggleState2 },
      position: { x: 560, y: 250 },
    },
    {
      id: 'q3',
      type: 'twoWaySwitch', // input node
      data: { label: 'Q3', on: state3, onChange: toggleState3, multipleInput: true, singleOutput: true },
      position: { x: 900, y: 250 },
    },
    {
      id: 'output',
      type: 'output', // input node
      data: { label: 'E1', on: (!state && !state2 && state3) || (state && state2 && !state3) || (!state && state2 && !state3) || (state && !state2 && state3) },
      position: { x: 1200, y: 13 },
    },
    // handles
    {
      id: 'power-to-switch',
      target: 'q1',
      type: 'step',
      source: '1',
      sourceHandle: 'L1',
      style: {stroke: 'red'},
      animated: true
    },
    {
      id: 'power-to-outlet-1',
      target: 'x1',
      type: 'step',
      source: '1',
      sourceHandle: 'L1',
      targetHandle: 'L',
      style: {stroke: 'red'},
      animated: true
    },
    {
      id: 'power-to-outlet-2',
      target: 'x1',
      type: 'step',
      source: '1',
      sourceHandle: 'N',
      targetHandle: 'N',
      style: {stroke: 'black'},
      animated: true
    },
    {
      id: 'power-to-outlet-3',
      target: 'x1',
      type: 'step',
      source: '1',
      sourceHandle: 'PE',
      targetHandle: 'PE',
      style: {stroke: 'brown'},
      animated: true
    },
    {
      id: 'q1-to-q2',
      target: 'q2',
      type: 'step',
      source: 'q1',
      sourceHandle: 'output1',
      targetHandle: 'input1',
      style: {stroke: 'red', strokeWidth: 2},
      animated: !state
    },
    {
      id: 'q1-to-q2-2',
      target: 'q2',
      type: 'step',
      source: 'q1',
      sourceHandle: 'output2',
      targetHandle: 'input2',
      style: {stroke: 'blue', strokeWidth: 2},
      animated: state
    },
    {
      id: 'q2-to-q3-1',
      target: 'q3',
      type: 'step',
      source: 'q2',
      sourceHandle: 'output1',
      targetHandle: 'input1',
      style: {stroke: '#10ac84', strokeWidth: 2},
      animated: !state2
    },
    {
      id: 'q2-to-q3-2',
      target: 'q3',
      type: 'step',
      source: 'q2',
      sourceHandle: 'output2',
      targetHandle: 'input2',
      style: {stroke: '#341f97', strokeWidth: 2},
      animated: state2
    },
    {
      id: 'q3-to-output',
      target: 'output',
      type: 'step',
      source: 'q3',
      sourceHandle: 'output1',
      targetHandle: 'L2',
      style: {stroke: '#341f97', strokeWidth: 2},
      animated: (!state && !state2 && state3) || (state && state2 && !state3) || (!state && state2 && !state3) || (state && !state2 && state3)
    },
    {
      id: 'output-to-power',
      target: '1',
      type: 'step',
      source: 'output',
      sourceHandle: 'N2',
      targetHandle: 'N',
      style: {stroke: 'black', strokeWidth: 2},
      animated: true,
      label: "N",
    },
  ]), [state, state2, state3]);

  return (
    <div>
      <FlowCanvas elements={elements} />
    </div>
  )
}

export default Module4
