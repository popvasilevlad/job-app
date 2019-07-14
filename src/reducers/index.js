import * as ACTIONS from '../constants/action-types'

const initialState = {
    data: [],
    loading: false
}

export const rootReducer = (state = initialState, action) => {
    if (action.type === ACTIONS.LOAD_HOME) {
        return Object.assign({}, state, {
            data: action.payload
        })
    }
    return state;
}