import React from 'react';

class ListItem extends React.Component{
    constructor(){
        super();
        this.state = {
            statusList: [
                "Pending",
                "Ongoing",
                "Complete"
            ]
        }
    }
    render(){
        return(
            <div className="todo-item">
					<div className="left">
						<div className="title">{this.props.title}</div>
						<div className="details">
							<div className={"status " + (this.props.status)}>
								<i className="zmdi zmdi-edit"></i>
								<span>{this.props.status}</span>
							</div>
							<div className="date">
								<i className="zmdi zmdi-calendar"></i>
								<span>{this.props.date}</span>
							</div>
						</div>
						<div className="description">
							{this.props.description}
						</div>
						<div className="tags">
                            {
                                this.props.tags.map((tag, index)=>{
                                    return <span className="tag" key={index}>{tag}</span>
                                })
                            }
							
						</div>
					</div>
					<div className="right">
						<select onChange={this.props.changeStatus} index={this.props.index}>
							<option hidden defaultChecked>Mark as</option>
							{
                                this.state.statusList.map((status, index)=>{
                                    return <option key={index} value={status}>{status}</option>
                                })
                            }
						</select>
						<button className="btn delete" index={this.props.index} onClick={this.props.deleteItem}><i className="zmdi zmdi-delete"></i></button>
					</div>
				</div>
        )
    }
}

export default ListItem;