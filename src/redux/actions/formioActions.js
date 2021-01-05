import { getSubmissions, getForm } from 'react-formio';
import { FETCH_FSHA_LIST } from '../ActionTypes';

export const getFSHAList = (page = 1, query = { limit: 999999 }, callback = () => { }) => dispatch => {
    dispatch(getSubmissions('submissions', page, query, (err, result) => {
        if (err || !result) {
            return callback(err);
        }

        dispatch({
            type: FETCH_FSHA_LIST,
            payload: result
        })

        return callback(null, result);
    }));
};

export const getCreateForm = (callback = () => { }) => dispatch => {
    dispatch(getForm('createfsha', null, (err, result) => {
        if (err || !result) {
            return callback(err);
        }

        return callback(null, result);
    }));
};

export const getFormByName = (formName, callback = () => { }) => dispatch => {
    dispatch(getForm(formName, null, (err, result) => {
        if (err || !result) {
            return callback(err);
        }

        return callback(null, result);
    }));
};