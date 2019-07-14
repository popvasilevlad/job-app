import * as ACTIONS from '../constants/action-types';

export function loadHome(payload) {
    return {
        type: ACTIONS.LOAD_HOME,
        payload
    }
}