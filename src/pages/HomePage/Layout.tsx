import { FC, ReactElement, useCallback, useRef } from "react"
import { Button, Divider, List, message, PageHeader, Space, Tooltip, Typography } from 'antd'
import { pageModules } from "../../data/moduleName"
import ModuleCard from "./ModuleCard"
import { Container } from "../../components/Container"
import useAuth from "hooks/useAuth"
import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import useErrorCatcher from "hooks/useErrorCatcher"
import UserList, { forwardRefInterface } from "components/UserModal/UserList"

const Layout: FC = (): ReactElement => {
  document.title = "Modul Praktikum";
  const { user, setLogout, auth } = useAuth();
  const {errorCatch} = useErrorCatcher();
  const ref = useRef<forwardRefInterface | null>(null);

  const logout = useCallback(() => {
    auth.remove().then(resp => {
      console.log(resp);
      setLogout();
      message.success('Logout berhasil');
    }).catch(errorCatch)
  }, [setLogout, auth, errorCatch]);

  return (
    <Container>
      <UserList ref={ref} />
      <PageHeader title={user?.name} subTitle={user?.type === 'lecturer' ? "Dosen" : "Mahasiswa"} extra={
        <Space size={2} split={<Divider type="vertical" />}>
        <Tooltip title="Pengguna" placement="left">
          <Button onClick={() => ref.current?.toggleModal(true)} icon={<UserOutlined />} size="small" />
        </Tooltip>
        <Tooltip title="Logout" placement="left">
          <Button onClick={logout} icon={<LogoutOutlined />} size="small" type="primary" danger />
        </Tooltip>
        </Space>
      } />
      <Typography.Title style={{ textAlign: 'center' }} level={3}>Modul Praktikum Perancangan Listrik</Typography.Title>
      <Typography.Text style={{ textAlign: 'center', display: 'block' }} type="secondary">D3 Teknik Listrik Politeknik Negeri Manado</Typography.Text>
      <Divider />
      <List
        dataSource={pageModules}
        rowKey={item => item.name}
        renderItem={({ name, description }, index: number) => (
          <List.Item>
            <ModuleCard name={name} index={index} description={description} />
          </List.Item>
        )}
        grid={{ column: 3, gutter: 16 }}
      />
    </Container>
  )
}

export default Layout
