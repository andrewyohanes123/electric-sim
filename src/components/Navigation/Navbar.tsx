import { FC, ReactElement, ReactNode } from "react"
import { Button, Divider, Space } from "antd"
import { LeftOutlined } from '@ant-design/icons'
import { TopBar } from "./TopBar"

interface props {
  title?: ReactNode;
  onBack?: () => void;
}

const Navbar: FC<props> = ({ title, onBack }): ReactElement => {
  return (
    <TopBar>
      <Space size={2} split={<Divider type="vertical" />}>
        <Button onClick={onBack} size="small" icon={<LeftOutlined />} />
        {typeof title !== 'undefined' && <>{title}</>}
      </Space>
    </TopBar>
  )
}

export default Navbar
