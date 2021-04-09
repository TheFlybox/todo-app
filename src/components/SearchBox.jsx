import React from 'react';

class SearchBox extends React.Component{
    render(){
        return(
            <div className="searchbox">
				<i className="zmdi zmdi-search icon"></i>
				<input type="text" placeholder="Search..." onInput={this.props.onInput}/>
				<button className="btn sort" onClick={this.props.sort}><i className="zmdi zmdi-filter-list"></i></button>
			</div>
        )
    }
}

export default SearchBox;