import React, { Component } from 'react'
import ShowToDo from '../components/ShowToDo';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      toDoList: [],
      newToDo: '',
    };
  }

  addToDo = () => {
    this.setState ({
        toDoList: [
            ...this.state.toDoList,
            {action: this.state.newToDo, done: false},
        ],
    });
  };

  addToList = (e) => {
    e.preventDefault();
    const thingToDo = e.target.thing.value
    // const copy = this.state.todoItems.slice()
    // copy.push(thingToDo)
    // this.setState({todoItems: copy})

    // const copy = [...this.state.todoItems, thingToDo]
    // this.setState({todoItems: copy})

    this.setState({todoItems: this.state.todoItems.concat([thingToDo])})
  }

  showToDo = () => 
    this.state.toDoList.map((item) => (<ShowToDo key={item.action} item={item} callback={this.completeToDo} />));
  

  updateToDo = (e) => {
    e.preventDefault();
    this.setState({
        newToDo: e.target.value 
    });
  };
  
    completeToDo = (todo) =>
    this.setState({
        toDoList: this.state.toDoList.map((item) =>
        item.action === todo.action ? {...item, done: !item.done } : item
        ),
    });

    // deleteToDo = (item) => 
    

  render = () => (
    <div className = "container">
        <div className="row">
        <div className="col-8" >
          <h2 className="title">
            To Do List
          </h2>
        </div>
        <div className="col-6">
            <input name='thing' id = "formcontrol" className ="form-control" value={this.state.newToDo} onChange={this.updateToDo}/>
            <button id="addbtn" className="btn btn-light" onClick = {this.addToDo}> Add </button>
        </div>
        <div className="col-8">
            <table className="table">
                <thead>
                    <tr>
                        <th> Task </th>
                        <th> Complete </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody> {this.showToDo()}</tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

