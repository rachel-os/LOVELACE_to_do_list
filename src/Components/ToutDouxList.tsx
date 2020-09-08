import React, { Component } from 'react';
import ToutDoux from './ToutDoux';

interface ToutDouxListState {
  todos: InterfaceToutDoux[]
}

interface InterfaceToutDoux {
  name: string;
  done: boolean;
}

export default class ToutDouxList extends Component<{}, ToutDouxListState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        { name: 'J5 : Base de données NoSQL et ORM', done: false },
        { name: 'J6 : Authentification, Intégration Continue', done: false },
        { name: 'J7 : React, State et TodoList', done: false },
        { name: 'J8 : Connexion du Front et du Back', done: false },
        { name: "J9 : Inscription et Connexion à l'App", done: false }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Liste #1</h2>
        <ul>
          {this.state.todos.map((todo) =>
            <ToutDoux name={todo.name} 
            done={todo.done}
            setToutDouxDone={() => {
              this.setState({
                todos: [...this.state.todos.filter((todoInState) => todoInState !== todo),
                {name: todo.name, done:true}
                ]
              });
            }}/>
            )}
        </ul>
      </div >
    )
  }
}
