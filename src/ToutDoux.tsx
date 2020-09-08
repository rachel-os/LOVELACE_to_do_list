import React from 'react';

interface ToutDouxProps {
  name: string,
}

interface ToutDouxState {
  done: boolean,
}

class ToutDoux extends React.Component<ToutDouxProps, ToutDouxState> {
  constructor(props: ToutDouxProps) {
    super(props);
    this.state = {
      done: false,
    }
  }

  componentDidMount() {
    console.log("Le composant est monté ^^ ");
  }

  render() {
    const buttonChange =
      <button onClick={(event) => this.setState({ done: true })}>Done!</button>
    if (this.state.done) {
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

export default ToutDoux;