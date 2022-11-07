import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import Player from '../components/Player';
import InsertNewPlayer from '../components/InsertNewPlayer';
import PlayerDetail from '../components/PlayerDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "/App.css"


class Scoreboard extends Component {



  render() {
    // bindActionCreators(TodoActionCreators, dispatch),
    const { dispatch, players, selectedPlayerIndex } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);



    let selectedPlayer;
    if (selectedPlayerIndex !== -1) { //to list out all detail card
      selectedPlayer = players[selectedPlayerIndex];
    }

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));
    return (
      <div className="Liverpool">
        <Header players={players} />
        <div className="players">
          {playerComponents}
        </div>
        <InsertNewPlayer addPlayer={addPlayer} />
        <div className="player-detail">
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );

  }
  PropTypes = {
    players: PropTypes.array.isRequired
  };
}

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(Scoreboard);

  //https://redux.js.org/api/bindactioncreators