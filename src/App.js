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


  render() {
    return (
      <div>
        <h3>Aplikasi Aktivitas Harian</h3>

        <form ref="formulir">
          <input type="text" ref="jam" placeholder="jam aktivitas"></input>
          <input type="text" ref="aktivitas" placeholder="jenis aktivitas"></input>
          <button onClick={this.addTodo}>simpan</button>
        </form>
        <hr />
        <div>
        <ul>
          { this.state.todos.map((data, i) =>
            <li key={i}>
              <div>
                <button onClick={ ()=>this.removeTodo(i) }>hapus</button>{data.jam} : {data.aktivitas}
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