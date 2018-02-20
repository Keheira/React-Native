let itemId = 0

export const add = (text) => ({
    type: 'ADD',
    id: itemId++,
    text
})

export const complete = (id) => ({
    type: 'COMPLETE',
    id
})