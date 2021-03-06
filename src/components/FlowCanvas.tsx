import { FC, ReactElement, useMemo } from "react"
import ReactFlow, { Elements, Background, NodeTypesType } from "react-flow-renderer"
import { PowerSource, ElectricalSwitch, Output, Outlet, TwoWaySwitch, OutputDimmer, Dimmer, NeonOutput, Fuse, Capacitor, FillamentOutput } from "./electricals";
import FluidContainer from "./FluidContainer"

interface props {
  elements: Elements;
}

const FlowCanvas: FC<props> = ({ elements }): ReactElement => {
  const nodeTypes: NodeTypesType = useMemo((): NodeTypesType => ({
    powerSource: PowerSource,
    electricalSwitch: ElectricalSwitch,
    output: Output,
    outlet: Outlet,
    twoWaySwitch: TwoWaySwitch,
    outputDimmer: OutputDimmer,
    dimmer: Dimmer,
    neonOutput: NeonOutput,
    fuse: Fuse,
    capacitor: Capacitor,
    fillamentOutput: FillamentOutput
  }), []);

  return (
    <FluidContainer>
      <ReactFlow nodesDraggable={false} snapToGrid snapGrid={[15, 15]} nodeTypes={nodeTypes} elements={elements} >
        <Background
          // @ts-ignore
          variant="lines"
        />
      </ReactFlow>
    </FluidContainer>
  )
}

export default FlowCanvas
