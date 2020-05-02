import request from 'superagent'

export function getChapters(chapters) {
    return {
        type: 'GET_CHAPTERS',
        chapters: chapters
    }
}

export function fetchChapters() {
    return (dispatch) => {
        return request
            .get('https://cdn.contentful.com/spaces/r41k1l9a1ble/environments/master/entries?access_token=QZeDYcNHcCNmnHdKEW2K-fWOT9rC0HiOrzbXb3dVWvM')
            .then(res => {
                return dispatch(getChapters(res.body.items))
            })
    }
}