import React from 'react';
import './style.css';

class example1_01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ name: evt.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Enter Text: {name}</h1>
        <input type="text" value={name} onChange={this.handleChange} />
      </div>
    );
  }
}

export default example1_01;
