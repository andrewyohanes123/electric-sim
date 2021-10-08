import { FC, ReactElement, useMemo } from "react"
import { Elements } from "react-flow-renderer"
import FlowCanvas from "../components/FlowCanvas"

const Module2: FC = (): ReactElement => {
  document.title = "Modul 2"
  const elements: Elements = useMemo<Elements>(() => ([
    {
      id: '1',
      type: 'powerSource', // input node
      data: { label: 'Input Node' },
      position: { x: 250, y: 50 },
    },
  ]), []);

  return (
    <div>
      <FlowCanvas elements={elements} />
    </div>
  )
}

export default Module2
