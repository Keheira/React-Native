import { createStore } from 'redux'
import State from '../state'


export const list = (state = State, action) => {
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                id: action.id + 1,
                text: action.text
            };
        case 'COMPLETE':
            return{
                ...state, 
                complete: !actions.complete
            };
        case 'UPDATE':
            return{
                ...state, 
                text: action.text
            };
        default:
            return state;
    }
}