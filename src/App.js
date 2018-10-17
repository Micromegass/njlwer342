import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor() {
    super();
      this.state = {
        tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
        name: ""
      }
  }


  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, i) => 

                <li key={i}>{task}</li>
        
              )}
          </ul>
           <form onSubmit={this.handleSubmit.bind(this)}>
             <input onChange={this.valueMethod.bind(this)} value={this.state.name} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    );
  }





  handleSubmit(event) {
        event.preventDefault();
        this.setState({
          tasks: this.state.tasks.concat("Hola"),
          name: ""
        });

      
    }


valueMethod(event) {
  this.setState({
    name: event.target.value
  });

}


  }






export default App;
