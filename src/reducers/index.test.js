import { initialState, rootReducer } from './index';
import * as ACTIONS from '../constants/action-types'

describe('[Root reducer]', () => {
    let initialStateCopy;

    beforeEach(() => {
        initialStateCopy = initialState;
    });

    it('has a default state', () => {
        expect(rootReducer(initialState, {
            type: 'unknown'
        })).toEqual(initialStateCopy)
    });


    it('should handle FETCH_JOBS_START', () => {
        initialStateCopy.loading = true;

        expect(rootReducer(initialState, {
            type: ACTIONS.FETCH_JOBS_START
        })).toEqual(initialStateCopy);
    });


    it('should handle FETCH_JOBS_SUCCESS', () => {
        initialStateCopy.loading = false;
        initialStateCopy.jobs = 'jobs';

        expect(rootReducer(initialState, {
            type: ACTIONS.FETCH_JOBS_SUCCESS,
            payload: 'jobs'
        })).toEqual(initialStateCopy);
    }); 


    it('should handle FETCH_JOBS_FAIL', () => {
        initialStateCopy.loading = false;
        initialStateCopy.error = 'error';

        expect(rootReducer(initialState, {
            type: ACTIONS.FETCH_JOBS_FAIL,
            payload: 'error'
        })).toEqual(initialStateCopy);
    });


    it('should handle FETCH_JOB_DATA_START', () => {
        initialStateCopy.loading = true;

        expect(rootReducer(initialState, {
            type: ACTIONS.FETCH_JOB_DATA_START
        })).toEqual(initialStateCopy);
    });


    it('should handle FETCH_JOB_DATA_SUCCESS', () => {
        initialStateCopy.loading = false;
        initialStateCopy.openedJob = 'openedJob';

        expect(rootReducer(initialState, {
            type: ACTIONS.FETCH_JOB_DATA_SUCCESS,
            payload: 'openedJob'
        })).toEqual(initialStateCopy);
    });


    it('should handle FETCH_JOB_DATA_FAIL', () => {
        initialStateCopy.loading = false;
        initialStateCopy.error = 'error';

        expect(rootReducer(initialState, {
            type: ACTIONS.FETCH_JOB_DATA_FAIL,
            payload: 'error'
        })).toEqual(initialStateCopy);
    });
})