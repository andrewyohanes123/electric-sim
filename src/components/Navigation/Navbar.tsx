import { FC, ReactElement } from "react"
import { Button, Divider, Space, Typography } from "antd"
import { LeftOutlined } from '@ant-design/icons'
import { TopBar } from "./TopBar"

interface props {
  title?: string;
  onBack?: () => void;
}

const Navbar: FC<props> = ({ title, onBack }): ReactElement => {
  return (
    <TopBar>
      <Space size={2} split={<Divider type="vertical" />}>
        <Button onClick={onBack} size="small" icon={<LeftOutlined />} />
        {typeof title !== 'undefined' && <Typography.Text>{title}</Typography.Text>}
      </Space>
    </TopBar>
  )
}

export default Navbar
