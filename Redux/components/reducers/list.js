import { createStore } from 'redux'


export const list = (state = {}, action) => {
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

export default store = createStore(list)