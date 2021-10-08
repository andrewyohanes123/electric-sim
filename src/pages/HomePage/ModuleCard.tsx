import { Card, Typography } from "antd"
import { FC, ReactElement } from "react"
import { useHistory } from "react-router"

interface props {
  name: string;
  description: string;
  index: number;
}

const ModuleCard: FC<props> = ({ name, description, index }): ReactElement => {
  const { push } = useHistory();

  return (
    <Card onClick={() => push(`modul/${index + 1}`)} hoverable>
      <Typography.Title level={3}>{name}</Typography.Title>
      <Typography.Text type="secondary">{description}</Typography.Text>
    </Card>
  )
}

export default ModuleCard
