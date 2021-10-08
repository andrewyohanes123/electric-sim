import { FC, ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css'
import HomePage from './pages/HomePage';
import ModuleSelector from './pages/ModuleSelector';

const App: FC = (): ReactElement => {


  return (
    <Switch>
      <Route component={HomePage} exact path={"/"} />
      <Route component={ModuleSelector} exact path={"/modul/:index"} />
    </Switch>
  );
}

export default App;
