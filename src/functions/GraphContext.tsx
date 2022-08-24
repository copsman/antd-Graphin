import React, { useContext, useEffect, useState } from 'react';
import {GraphinContext } from '@antv/graphin';
import { useGraphData } from '../states/graph_states';

const GraphContext: React.FC = () => {
    const [stateData, setStateData]:any = useState(null)
    const {selectedGraphContext,selectedData, setGraphContext} = useGraphData()
    const {graph} = useContext(GraphinContext)

        //console.log("render")
        //console.log(graph['cfg']['data'])
        useEffect(() => {
            console.log("ggg")
            graph.render()
            //graph.setTextWaterMarker(['AntV', 'G6'])
            const str:any = "account_7"
            console.log(graph.findById(str))
            const item = graph.findById(str)
            graph.focusItem(str)
            // if(item != null){
            //     item.hide()
            // }
        },[graph['cfg']['data']])
        //graph.render()
    return (
        <>
        </>
    );
};

export default GraphContext;