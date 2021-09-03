import { useMemo, FC, ReactElement } from 'react'
import { Elements } from 'react-flow-renderer';
import './App.css';
import FlowCanvas from './components/FlowCanvas';

const App: FC = (): ReactElement => {
  const elements: Elements = useMemo<Elements>(() => ([
    {
      id: '1',
      type: 'input', // input node
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
    // default node
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output', // output node
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2', animated: true, type: 'step', style: {color: 'red', border: '1px solid red', background: 'red'} },
    { id: 'e2-3', source: '2', target: '3' },
  ]), []);

  return (
    <div>
      <FlowCanvas elements={elements} />
    </div>
  );
}

export default App;
