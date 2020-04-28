function chapters(state = [], action) {
    switch (action.type) {
        case 'GET_CHAPTERS':
            return action.chapters
        default:
            return state
    }
}

export default chapters