const list = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            return[
                ...state,
                {
                    id: action.id,
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

export default list