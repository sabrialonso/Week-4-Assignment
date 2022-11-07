import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InsertNewPlayer extends Component {
  

  state = { name: '' };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };

  addPlayer = (e) => {
    if (e) e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Insert Player Name"
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
  PropTypes = {
    addPlayer: PropTypes.func
  };
}

