import React, { Component } from 'react';
import './App.css';
import Header from './header';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor() {
    super();
    this.state =  { todos: []  } 
  }

  addTodo = (e) => {
    e.preventDefault();

    let jam       = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;

    this.state.todos.push({jam, aktivitas});
    this.setState({todos: this.state.todos})

    this.refs.formulir.reset();
    this.refs.jam.focus();
  }

  removeTodo = (i) => {
    this.state.todos.splice(i,1);
    this.setState({todos:this.state.todos});
  }


  render() {
    return (
      <div>
        <Header />

        <form ref="formulir" className="form-inline">
          <input type="text" className="form-control" ref="jam" placeholder="jam aktivitas"></input>&nbsp;
          <input type="text" className="form-control" ref="aktivitas" placeholder="jenis aktivitas"></input>&nbsp;
          <button onClick={this.addTodo} className="btn btn-info">simpan</button>
        </form>
        <hr />
        <div>
        <ul>
          <CSSTransitionGroup
            transitionName="animasi"
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}
          >
          { this.state.todos.map((data, i) =>
            <li key={i}>
              <div>
                <button onClick={ ()=>this.removeTodo(i) } className="btn btn-outline-danger">hapus</button> {data.jam} : {data.aktivitas}
                <hr/>
              </div>
            </li>
          )}
          </CSSTransitionGroup>
        </ul>
        </div>
      </div>
    )
  }
}
export default App;