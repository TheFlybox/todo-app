import React from 'react';

class Graph extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <canvas id="chartdiv" className={"chartdiv " + (this.props.show ? "active":"hidden")}></canvas>
        )
    }
}

export default Graph;