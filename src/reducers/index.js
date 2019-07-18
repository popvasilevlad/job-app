import * as ACTIONS from '../constants/action-types'

export const initialState = {
    data: [],
    loading: true,
    error: null,
    jobs: [],
    openedJob: {}
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.FETCH_JOBS_START:
            return Object.assign({}, state, {
                loading: true
            });

        case ACTIONS.FETCH_JOBS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                jobs: action.payload
            });

        case ACTIONS.FETCH_JOBS_FAIL:
            return Object.assign({}, state, {
                loading: false,
                error: action.payload
            });
        
        case ACTIONS.FETCH_JOB_DATA_START:
            return Object.assign({}, state, {
                loading: true
            });

        case ACTIONS.FETCH_JOB_DATA_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                openedJob: action.payload
            });

        case ACTIONS.FETCH_JOB_DATA_FAIL:
            return Object.assign({}, state, {
                loading: false,
                error: action.payload
            });
        
        default:
            return state;
    }
}