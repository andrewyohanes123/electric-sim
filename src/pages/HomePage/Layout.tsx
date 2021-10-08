import { FC, ReactElement } from "react"
import { Divider, List, Typography } from 'antd'
import { pageModules } from "../../data/moduleName"
import ModuleCard from "./ModuleCard"
import { Container } from "../../components/Container"

const Layout: FC = (): ReactElement => {
  document.title = "Modul Praktikum";

  return (
    <Container>
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
        grid={{ column: 2, gutter: 16 }}
      />
    </Container>
  )
}

export default Layout
