import React from 'react';
import * as actions from './actions';

const initState = {
	question: {
		english: "house", 
		french: "", 
		freq: 1,
	}, 
	score: 2,
};

const reducer = (state=initState, action) => {
	switch (action.type) {
		case 'INCREMENT' :
			return {
				...state,
				counter: data
			}
		case 'DECREMENT' :
			return {
				...state,
				counter: data
			}
		case 'GET_CARD_SUCCESS' :
			return {
				...state, 
				question: action.question.question
			}
		case actions.ENGAGE_TYPEWRITER :
			return {
				...state,
				typewriter: action.num
			}
		case actions.NEXT_QUESTION :
			console.log('this is in the reducer', action.question)
			return { 
				...state,
				question: action.question.question
			}	
	}
	return state;
}	

export default reducer;