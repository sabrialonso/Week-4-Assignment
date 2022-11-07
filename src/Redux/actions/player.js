import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name:name
  };
};

export const removePlayer = index => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index:index
  };
};

export const updatePlayerScore = (index, score)  => {
   return {
     type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
     index:index,
     score:score
  };
};

export const selectPlayer = index => {
  return {
    type: PlayerActionTypes.SELECT_PLAYER,
    index:index
  };
};

// import * as actions from "./actionType"

// //action methods
// export const onIncrement = (val) => {
//     console.log(val);
    
//     return {
//         type: actions.INC,
//         payload: val
//     }
// }

// export const onDecrement = (d) => {
//     console.log(d);

//     return {
//         type: actions.DEC,
//         payload: d
//     }
// }


