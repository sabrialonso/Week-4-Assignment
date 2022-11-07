import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'Sadio Mane',
	  score: 105,
		created: '05/11/2022',
		updated: '05/11/2022'
	},
	{
		name: 'Mohamed Salah',
		score: 110,
		created: '05/11/2022',
		updated: '05/11/2022'
	},
	{
		name: 'Roberto Firmino',
		score: 100,
		created: '05/11/2022',
		updated: '05/11/2022'
	}
	],
	selectedPlayerIndex: -1
}

function Player(state=initialState, action) {

	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

  switch(action.type){
    case PlayerActionTypes.ADD_PLAYER: {
			const addPlayerList = [...state.players,   {
          name: action.name,
          score: 0,
          created: `${month}/${day}/${year}`
      }];
      return {
        ...state,
				players: addPlayerList
		 	};
	 	}

    case PlayerActionTypes.REMOVE_PLAYER: {
			const removePlayerList = [
				...state.players.slice(0, action.index),
				...state.players.slice(action.index + 1)
			];
      return {
				...state,
				players: removePlayerList
			};
		}

    case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
			const updatePlayerList = state.players.map((player, index) => {
        if(index === action.index){
          return {
            ...player,
             score: player.score + action.score,
             updated: `${month}/${day}/${year}`
           };
        }
        return player;
      });
			return {
				...state,
				players: updatePlayerList
			};
		}

	  case PlayerActionTypes.SELECT_PLAYER:
		  return {
				...state,
				selectedPlayerIndex: action.index
			};

    default:
      return state;
  }
}

export default Player
// //central storage (state)
// const initState = {
//     count: 0,
// }


// // reducer is a function and return application state
// const reducer = (state = initState, action) => {
//     console.log(action);//action is a object

//     switch (action.type) {
//         case actions.INC:
//             console.log(action);
//             return { ...state, count: state.count + action.payload }
//         case actions.DEC:
//             return { ...state, count: state.count - action.payload }
//         default:
//             return state;
//     }

// }

// export default reducer;