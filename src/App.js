import React, { Component } from 'react';
import './App.css';

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
        <h3>Aplikasi Aktivitas Harian</h3>

        <form ref="formulir" className="form-inline">
          <input type="text" className="form-control" ref="jam" placeholder="jam aktivitas"></input>&nbsp;
          <input type="text" className="form-control" ref="aktivitas" placeholder="jenis aktivitas"></input>&nbsp;
          <button onClick={this.addTodo} className="btn btn-info">simpan</button>
        </form>
        <hr />
        <div>
        <ul>
          { this.state.todos.map((data, i) =>
            <li key={i}>
              <div>
                <button onClick={ ()=>this.removeTodo(i) } className="btn btn-outline-danger">hapus</button>{data.jam} : {data.aktivitas}
              </div>
            </li>
          )}
        </ul>
        </div>
      </div>
    )
  }
}
export default App;