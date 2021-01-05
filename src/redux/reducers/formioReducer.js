import * as ActionTypes from '../ActionTypes';

const initialState = {
    fshaList: [],
};

export const FormIOReducer = (state = initialState, { type, payload, ...rest }) => {
    switch (type) {
        case ActionTypes.FETCH_FSHA_LIST:
            return {
                ...state,
                fshaList: payload,
            };

        default:
            return {
                ...state
            };
    }
}
