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
            {this.state.tasks.map(task => 

                <li>{task}</li>

        
              )}
          </ul>
           <form>
             <input onKeyDown={this.handleKeyPress.bind(this)} onChange={this.valueMethod.bind(this)} value={this.state.name} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    );
  }


valueMethod(event) {
  this.setState({
    name: event.target.value
  });

}


  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
     event.preventDefault();  
        this.setState({
          tasks: this.state.tasks.concat(event.target.value),
          name: ''
        });
   
    }

    
  
  }

  


}


export default App;
