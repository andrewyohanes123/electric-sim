import { FC, ReactElement } from 'react'
import './App.css';
import 'antd/dist/antd.css'
import Module1 from './pages/Module1';

const App: FC = (): ReactElement => {
  

  return (
    <div>
      <Module1 />
    </div>
  );
}

export default App;
