import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Aplikasi Aktivitas Harian</h3>

        <form ref="formulir">
          <input type="text" ref="jam" placeholder="jam aktivitas"></input>
          <input type="text" ref="aktivitas" placeholder="jenis aktivitas"></input>
          <button onClick={this.addTodo}>simpan</button>
        </form>
      </div>
    )
  }
}
export default App;