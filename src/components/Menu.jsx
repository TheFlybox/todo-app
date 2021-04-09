import React from 'react';

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                {
                    this.props.data.map((item, index)=>{
                        return <a href="#" index={index} onClick={this.props.onClick} className={"item " + (item.active?"active":"") + (item.header==="Graph details"?" graph":"")} key={index}>{item.header}</a>
                    })
                }
            </div>
        )
    }
}

export default Menu;