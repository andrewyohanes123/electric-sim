import { LoginOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, message, Typography } from "antd"
import useAuth from "hooks/useAuth";
import useErrorCatcher from "hooks/useErrorCatcher";
import { FC, ReactElement, useCallback, useState } from "react"
import { Redirect } from "react-router";

const { Item } = Form;

const Layout: FC = (): ReactElement => {
  document.title = "Login"
  const { auth, login: loggedIn, setLogin } = useAuth();
  const [loading, toggleLoading] = useState<boolean>(false);
  const { errorCatch } = useErrorCatcher();

  const login = useCallback((val: { username: string; password: string }) => {
    toggleLoading(true);
    if (typeof auth !== 'undefined') {
      auth.set(val).then(resp => {
        toggleLoading(false);
        setLogin(resp)
        console.log(resp)
      }).catch(e => {
        toggleLoading(false);
        console.log({ e })
        if ('response' in e) {
          e.response.status === 401 && message.error(`Username atau password anda salah`);
        } else {
          errorCatch(e);
        }
      });
    }
    // eslint-disable-next-line
  }, [auth]);

  return (
    loggedIn ?
      <Redirect to="/modul" />
      :
      <div style={{ maxWidth: 615, margin: 'auto', padding: 15, height: '100%' }}>
        <Typography.Title level={4}>Login</Typography.Title>
        <Typography.Text type="secondary"></Typography.Text>
        <Divider />
        <Form onFinish={login} layout="vertical">
          <Item name="username" required={true} rules={[{ required: true, message: "Masukkan username" }]} label="Username">
            <Input disabled={loading} placeholder="Username" />
          </Item>
          <Item name="password" required={true} rules={[{ required: true, message: "Masukkan password" }]} label="Password">
            <Input.Password disabled={loading} placeholder="Password" />
          </Item>
          <Item>
            <Button loading={loading} htmlType="submit" type="primary" icon={<LoginOutlined />} block>Login</Button>
          </Item>
        </Form>
      </div>
  )
}

export default Layout
