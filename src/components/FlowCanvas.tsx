import { FC, ReactElement } from "react"
import ReactFlow, { Elements, Background } from "react-flow-renderer"
import FluidContainer from "./FluidContainer"

interface props {
  elements: Elements;
}

const FlowCanvas: FC<props> = ({ elements }): ReactElement => {
  return (
    <FluidContainer>
      <ReactFlow snapToGrid snapGrid={[15, 15]} elements={elements} >
        <Background
          // @ts-ignore
          variant="grids"
        />
      </ReactFlow>
    </FluidContainer>
  )
}

export default FlowCanvas
