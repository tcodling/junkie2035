function chapters(state = [], action) {
    switch (action.type) {
        case 'GET_CHAPTERS':
            return action.chapters.reverse()
        default:
            return state
    }
}

export default chapters