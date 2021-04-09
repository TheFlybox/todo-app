import React from 'react';
import ListItem from './ListItem';

class List extends React.Component{
    render(){
        return(
            <div className={(this.props.show)?"todo-list active":""}>
                {
                    this.props.data.map((item, index)=>{
                        return <ListItem
                                    title={item.title}
                                    description={item.description}
                                    date={item.date}
                                    status={item.status}
                                    tags={item.tags}
                                    key={index}
                                    changeStatus={this.props.changeStatus}
                                    index={index}
                                    deleteItem={this.props.deleteItem} />
                    })
                }
            </div>
        )
    }
}

export default List;