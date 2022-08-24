import React from "react";
import Graphin, { Behaviors, Utils } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import setIcons from "./styles/graphine-icons";
import { useGraphData } from "./states/graph_states";
import GraphContext from "./functions/GraphContext";
const { ZoomCanvas, FitView } = Behaviors;

export default function GraphTest() {
  const {selectedData} = useGraphData()
  var data:any = selectedData
  //console.log(selectedData)
  return (
    <div style={{'height':"100%", width:"100%"}}>
      <Graphin  data={data} layout={{ type: "dagre" }}>
        <GraphContext />
        <FitView />
      </Graphin>
      </div>
  );
}
