import React from 'react';
import Stats from './Stats';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Liverpool Scoreboard 2020</h1>
    </div>
  );
};

Header.propTypes = {
  players: PropTypes.array.isRequired
};

export default Header;
