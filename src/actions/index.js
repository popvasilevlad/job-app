import * as ACTIONS from '../constants/action-types';

export const fetchJobsStart = () => {
    return {
        type: ACTIONS.FETCH_JOBS_START
    }
}

export const fetchJobsSuccess = jobs => {
    return {
        type: ACTIONS.FETCH_JOBS_SUCCESS,
        payload: jobs
    }
}

export const fetchJobsError = error => {
    return {
        type: ACTIONS.FETCH_JOBS_FAIL,
        payload: { error }
    }
}
export const fetchJobDataStart = () => {
    return {
        type: ACTIONS.FETCH_JOB_DATA_START
    }
}

export const fetchJobDataSuccess = data => {
    return {
        type: ACTIONS.FETCH_JOB_DATA_SUCCESS,
        payload: data
    }
}

export const fetchJobDataError = error => {
    return {
        type: ACTIONS.FETCH_JOB_DATA_FAIL,
        payload: { error }
    }
}

const fetchHeaders = {
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const fetchJobs = () => {
    return dispatch => {
        dispatch(fetchJobsStart());
        
        return fetch('/api/jobs', fetchHeaders)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchJobsSuccess(json));
                return json;
            })
            .catch(err => dispatch(fetchJobsError(err)))
    }
}

export const fetchJobData = id => {
    return dispatch => {
        dispatch(fetchJobDataStart());
        
        return fetch(`/api/jobs?id=${id}`, fetchHeaders)
            .then(res => res.json())
            .then (json => {
                dispatch(fetchJobDataSuccess(json));
                return json;
            })
            .catch(err => dispatch(fetchJobDataError(err)))
    }

}

