import React from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = ({ selectedPlayer }) => {
  if(selectedPlayer){
    return (
      <div>
        <h3>{selectedPlayer.name}</h3>
        <ol>
          <li>
            <span>Score: </span> 
            {selectedPlayer.score}
          </li>
          <li>
            <span>Created: </span> 
            {selectedPlayer.created}
          </li>
          <li>
            <span>Updated: </span> 
            {selectedPlayer.updated}
          </li>        
        </ol>
      </div>
    );
  }
  else {
    return (<p>Click over the player name to see detail</p>);
  }
};

PlayerDetail.propTypes = {
  selectedPlayer: PropTypes.object
};

export default PlayerDetail;
