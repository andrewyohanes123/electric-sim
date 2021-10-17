import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Tooltip, Typography, Drawer } from "antd";
import { FC, ReactElement, useMemo, useCallback, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Navbar } from "../../components/Navigation";
import { TopBar } from "../../components/Navigation/TopBar";
import { pageModules } from "../../data/moduleName";

const ModuleSelector: FC = (): ReactElement => {
  const { index } = useParams<{ index: string }>();
  const moduleIndex = useMemo(() => {
    const idx: number = parseInt(index);
    return idx - 1 < 0 ? 0 : idx - 1;
  }, [index]);
  const modulePage = useMemo(() => pageModules[moduleIndex], [moduleIndex]);
  const { push } = useHistory();
  const [drawer, toggleDrawer] = useState<boolean>(false);

  const backToMainPage = useCallback(() => {
    push('/');
  }, [push]);

  document.title = `${modulePage.name} - ${modulePage.description}`

  return (
    <div>
      <Navbar onBack={backToMainPage} title={
        <Space size={2} split={<Divider type="vertical" />}>
          <Typography.Text>{modulePage.name}</Typography.Text>
          <Typography.Text type="secondary" strong>{modulePage.description}</Typography.Text>
        </Space>
      } />
      <TopBar position="right">
        <Tooltip placement="left" title={`PDF ${modulePage.name}`}>
          <Button onClick={() => toggleDrawer(true)} icon={<FilePdfOutlined />} size="small" />
        </Tooltip>
      </TopBar>
      {modulePage.component}
      <Drawer width={600} visible={drawer} onClose={() => toggleDrawer(false)} title={`PDF ${modulePage.name}`}>
        <object type="application/pdf" aria-label="test" width="100%" height="100%" data={modulePage.pdf}></object>
      </Drawer>
    </div>
  )
}

export default ModuleSelector
