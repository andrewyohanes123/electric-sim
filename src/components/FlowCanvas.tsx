import { FC, ReactElement, useMemo } from "react"
import ReactFlow, { Elements, Background, NodeTypesType } from "react-flow-renderer"
import { PowerSource, ElectricalSwitch, Output } from "./electricals";
import FluidContainer from "./FluidContainer"

interface props {
  elements: Elements;
}

const FlowCanvas: FC<props> = ({ elements }): ReactElement => {
  const nodeTypes: NodeTypesType = useMemo((): NodeTypesType => ({
    powerSource: PowerSource,
    electricalSwitch: ElectricalSwitch,
    output: Output
  }), []);

  return (
    <FluidContainer>
      <ReactFlow snapToGrid snapGrid={[15, 15]} nodeTypes={nodeTypes} elements={elements} >
        <Background
          // @ts-ignore
          variant="grids"
        />
      </ReactFlow>
    </FluidContainer>
  )
}

export default FlowCanvas
