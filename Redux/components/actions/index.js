let itemId = 0

export const add = (text) => {
    return {
        type: 'ADD',
        id: itemId++,
        text
    }
}

export const complete = (id) => {
    return {
        type: 'COMPLETE',
        id
    }
}