import React from 'react';
import { render } from 'react-dom';
import SearchBox from './components/SearchBox';
import Menu from './components/Menu';
import List from './components/List';
import Modal from './components/Modal';
import Graph from './components/Graph';
import './assets/style.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todoList: [
                {
                    id: 0,
                    title: "The Books",
                    description: "Read all the books!",
                    date: "2018-05-10",
                    status: "Pending",
                    tags: [
                        "read", "book", "coffee"
                    ]
                },
                {
                    id: 1,
                    title: "The Gym",
                    description: "Go to the gym at 6pm",
                    date: "2018-05-10",
                    status: "Pending",
                    tags: [
                        "gym", "muscle", "fitness", "pain"
                    ]
                },
                {
                    id: 2,
                    title: "Business",
                    description: "Complete a pending report!",
                    date: "2018-05-10",
                    status: "Pending",
                    tags: [
                        "job", "work", "stress", "money"
                    ]
                },
                {
                    id: 3,
                    title: "The Bedroom",
                    description: "Clean the bedroom!!",
                    date: "2018-05-10",
                    status: "Complete",
                    tags: [
                        "clean", "bedroom", "angry", "birds"
                    ]
                },
                {
                    id: 4,
                    title: "The Food",
                    description: "Go to the supermarket and buy some pizza!",
                    date: "2018-05-10",
                    status: "Ongoing",
                    tags: [
                        "hungry", "pizza", "food", "fat", "delicious", "holy cow"
                    ]
                }
            ],
            menuList: [
                {header: "All", active: true},
                {header: "Pending", active: false},
                {header: "Ongoing", active: false},
                {header: "Complete", active: false},
                {header: "Graph details", active: false}
            ],
            searchKey: "",
            menuActive: "All",
            showModal: false,
            addTodoTitle: "",
            addTodoDescription: "",
            addTodoTags: [],
            sortMethod: "asc",
            showGraphic: false
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.clearMenus = this.clearMenus.bind(this);
        this.sortAction = this.sortAction.bind(this);
        this.sortTodoList = this.sortTodoList.bind(this);
    }
    handleChange(e){
        let val = e.target.value;
        this.setState(state=>({
            searchKey: val
        }));
    }

    handleTodoModel(e){
        let val = e.target.value;
        let identifier = e.target.getAttribute("id");
        console.log(val);
        console.log(identifier);
        switch(identifier){
            case "title":
                this.setState(state=>({
                    addTodoTitle: val
                }));
                break;
            case "description":
                    this.setState(state=>({
                        addTodoDescription: val
                    }));
                break;
            case "tags":
                    let arr = val.split(",");
                    this.setState(state=>({
                        addTodoTags: arr
                    }));
                break;
        }
    }

    showModal(){
        this.setState(state=>({
            showModal: true
        }));
    }

    hideModal(){
        this.setState(state=>({
            showModal: false
        }));
    }

    changeStatus(e){
        let index = e.target.getAttribute("index");
        let value = e.target.value;
        let items = this.state.todoList;
        items[parseInt(index)].status = value;
        this.setState(state=>({
            todoList: items
        }));
    }

    deleteTodo(e){
        let index = e.target.getAttribute("index");
        let items = this.state.todoList;
        items.splice(parseInt(index), 1);
        this.setState(state=>({
            todoList: items
        }));
    }

    sortTodoList(){
        if(this.state.sortMethod === "asc"){
            this.setState(state=>({
                sortMethod: "desc"
            }), ()=>{
                this.sortAction();
            });
        }else{
            this.setState(state=>({
                sortMethod: "asc"
            }), ()=>{
                this.sortAction();
            });
        }
    }

    sortAction(){
        let resultCopy = null;
        let items = this.state.todoList;
        switch(this.state.sortMethod){
            case "asc":
                resultCopy = items.sort((a, b)=>{
                    return a.id - b.id;
                });
                break;
            case "desc":
                resultCopy = items.sort((a, b)=>{
                    return b.id - a.id;
                });
                break;
        }
        this.setState(state=>({
            todoList: resultCopy
        }));
    }

    setMenuActive(e){
        this.clearMenus();
        let index = e.target.getAttribute("index");
        let items = this.state.menuList;
        let value = e.target.innerHTML;
        items[index].active = true;
        this.setState(state=>({
            menuList: items,
            menuActive: value
        }));

        if(e.target.classList.contains("graph")){
			this.setState(state=>({
				showGraphic: true
			}));
            e.target.classList.add("active");
        }else{
			this.setState(state=>({
				showGraphic: false
			}));
		}
    }

    clearMenus(){
        let items = this.state.menuList;
        items.forEach((el)=>{
            el.active = false
        });
        this.setState(state=>({
            menuList: items
        }));
    }

    addTodo(){
        let title = this.state.addTodoTitle;
        let description = this.state.addTodoDescription;
        let tags = this.state.addTodoTags;

        let item = {
            title,
            description,
            date: new Date().toISOString(),
            status: "Pending",
            tags
        };
        
        this.setState(state=>({
            todoList: state.todoList.concat(item)
        }));

        this.hideModal();
    }

    render(){
        let data = null;

        if(this.state.menuActive === "All"){
            data = this.state.todoList;
        }else{
            data = this.state.todoList.filter((item)=>{
                return item.status === this.state.menuActive
            });
        }

        let filteredData = data.filter((item)=>{
            return (
                item.title.toLowerCase().indexOf(this.state.searchKey.toLowerCase()) > -1 ||
                item.description.toLowerCase().indexOf(this.state.searchKey.toLowerCase()) > -1 ||
                item.date.toLowerCase().indexOf(this.state.searchKey.toLowerCase()) > -1 ||
                item.tags.indexOf(this.state.searchKey.toLowerCase()) > -1
            )
        });

        return(
            <div className="todo">
                <div className="header">
                    <a href="#" className="title">
                        <b>TODO</b>
                        <span>LIST</span>
                    </a>
                </div>
                <SearchBox sort={this.sortTodoList} onInput={(e)=>{this.handleChange(e)}} />
                <Menu onClick={(e)=>{this.setMenuActive(e)}} data={this.state.menuList} />
                <List show={!this.state.showGraphic} deleteItem={(e)=>{this.deleteTodo(e)}} changeStatus={(e)=>{this.changeStatus(e)}} data={filteredData}/>
                <Modal save={this.addTodo} handleModel={(e)=>{this.handleTodoModel(e)}} show={this.state.showModal} hide={this.hideModal} />
                <Graph show={this.state.showGraphic} />
                <button className="btn add" onClick={this.showModal}>+</button>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector("#root")
);