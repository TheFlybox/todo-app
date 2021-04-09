import React from 'react';

class Modal extends React.Component{
    render(){
        return(
            <div>
                <div className={"modal-backdrop " + (this.props.show?"active":"")} id="addTodoModalShadow"></div>
                    <div className={"modal " + (this.props.show?"active":"")} id="addTodoModal">
                        <div className="modal-header">
                            <div className="left">
                                <div className="modal-title">Add a todo</div>
                            </div>
                            <div className="right">
                                <button className="btn close-modal" onClick={this.props.hide}><i className="zmdi zmdi-close"></i></button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="form">
                                <div className="form-row">
                                    <label>*Title: </label>
                                    <input type="text" id="title" onChange={this.props.handleModel} className="control" placeholder="Insert the title here." />
                                </div>
                                <div className="form-row">
                                    <label>*Description: </label>
                                    <input type="text" id="description" onChange={this.props.handleModel} className="control" placeholder="Insert the description here." />
                                </div>
                                <div className="form-row">
                                    <label>Tags: </label>
                                    <input type="text" id="tags" onChange={this.props.handleModel} className="control" placeholder="Separated by commas, ex: Candy, Food." />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="left"></div>
                            <div className="right">
                                <div className="btn-group">
                                    <button className="btn cancel" onClick={this.props.hide}>Cancel</button>
                                    <button className="btn save" onClick={this.props.save}>Save</button>
                                </div>
                            </div>
                        </div>
			        </div>
            </div>
        )
    }
}

export default Modal;