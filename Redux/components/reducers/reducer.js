import { createStore } from 'redux'

const initialState = {
    list: [{
        id: 0,
        text: '',
        completed: false
    }]
}

export const list = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'COMPLETE':
            return state.map(list =>
                (list.id === action.id)
                ? {...state, completed: !list.completed} : list
            );
        case 'UPDATE':
            return[
                ...state,
                {
                    text: action.text
                }
            ];
        default:
            return state;
    }
}

let store = createStore(list)

export default store