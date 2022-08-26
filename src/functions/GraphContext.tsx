import React, { useContext, useEffect, useState } from 'react';
import {GraphinContext } from '@antv/graphin';
import { useGraphData } from '../states/graph_states';

const GraphContext: React.FC = () => {
    const [stateData, setStateData]:any = useState(null)
    const {selectedGraphContext,selectedData, setGraphContext, selectedSearch} = useGraphData()
    const {graph} = useContext(GraphinContext)

        //console.log("render")
        //console.log(graph['cfg']['data'])
        useEffect(() => {
            console.log("ggg")
            graph.render()
            //graph.setTextWaterMarker(['AntV', 'G6'])
            //const str:any = "account_7"
            //console.log(graph.findById(selectedSearch))
            //const item = graph.findById(selectedSearch)
            //graph.focusItem(selectedSearch)
            // if(item != null){
            //     item.hide()
            // }
        },[graph['cfg']['data']])

        useEffect(() => {
            //graph.setTextWaterMarker(['AntV', 'G6'])
            if(selectedSearch != null || selectedSearch != ''){
                graph.refreshPositions()
                const str:any = "account_7"
                console.log(graph.findById(selectedSearch))
                const item = graph.findById(selectedSearch)
                graph.focusItem(item)
                console.log("done")
                // if(item != null){
                //     item.hide()
                // }
            }
            
        },[selectedSearch])
        //graph.render()
    return (
        <>
        </>
    );
};

export default GraphContext;