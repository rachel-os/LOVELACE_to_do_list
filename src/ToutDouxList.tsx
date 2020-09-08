import React, { Component } from 'react';
import ToutDoux from './ToutDoux';

export default class ToutDouxList extends Component {
  render() {
    const todos = [
      { name: 'J5 : Base de données NoSQL et ORM' },
      { name: 'J6 : Authentification, Intégration Continue ' }, 
      { name: 'J7 : React, State et TodoList' }, 
      { name: 'J8 : Connexion du Front et du Back' }, 
      { name: "J9 : Inscription et Connexion à l'App" }
    ]
    return (
      <div>
      <h2>Tout Doux Liste #1</h2>
    <ul>
      {todos.map((todo) => <ToutDoux name={todo.name} />)}
    </ul>
      </div >
    )
  }
}
