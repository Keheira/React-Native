const initialState = {
    list: [
        {text: 'Read', id: '123', complete: false}
    ]
}
const items = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return[
                ...state,
                {
                    id: id,
                    text: action.text,
                    complete: false
                }
            ]
        case 'COMPLETE':
            return state.map(list =>
                (list.id === action.id)
                    ?{...list, complete: !list.complete}
                    : list
            )
        default:
            return state;
    }
}

export default items