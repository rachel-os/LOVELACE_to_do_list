import React, { Component }  from 'react';

interface ToutDouxProps {
  name: string;
  done: boolean;
  setToutDouxDone: () => void;
}

export default class ToutDoux extends Component<ToutDouxProps> {
  render() {
    const buttonChange =
      <button onClick={(event) => 
        this.props.setToutDouxDone()}>
          <h6>Done!</h6></button>
    if (this.props.done) {
      return <div>
        <li style={{ textDecoration: "line-through" }}>{this.props.name}</li>
        {buttonChange}
      </div>
    } else {
      return <div>
        <li>{this.props.name}</li>
        {buttonChange}
      </div>
    }
  }
}
