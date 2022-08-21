import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './views/Home'
import ToDoList from './views/ToDoList'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
// import ShowToDo from './components/ShowToDo'
import Login from './views/Login'
import SignUp from './views/SignUp'

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />   
        <Routes>    
        <Route path ='/' element={<Home /> }/>
        <Route path='/Todo' element={<ToDoList />} />
        <Route path='/login' element={<Login logMeIn={this.logMeIn}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        </Routes> 
      </div>
      </BrowserRouter>
    )
  }
}
