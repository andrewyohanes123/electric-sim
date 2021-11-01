import { FC, ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import Adapter from '@edgarjeremy/sirius.adapter'
import './App.css';
import 'antd/dist/antd.css'
import HomePage from './pages/HomePage/Router';
import { useConnectServer } from './hooks/useConnectServer';
import { Result, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Login from 'pages/Login';

export const { REACT_APP_IP_ADDRESS, REACT_APP_PORT }: NodeJS.ProcessEnv = process.env;

const sirius = new Adapter(`${REACT_APP_IP_ADDRESS}`, parseInt(`${REACT_APP_PORT}`), localStorage);

const App: FC = (): ReactElement => {
  const { ready, error } = useConnectServer(sirius);

  return (
    ready ?
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={HomePage} path={"/modul"} />
      </Switch>
      :
      error ?
        <Result title="Terjadi kesalahan" subTitle={<Typography.Text>Muat ulang halaman ini dengan tombol <kbd>Ctrl</kbd> + <kbd>R</kbd></Typography.Text>} status="error" />
        :
        <Result title="Loading" subTitle="Mohon tunggu sebentar" icon={<LoadingOutlined spin />} />
  );
}

export default App;
