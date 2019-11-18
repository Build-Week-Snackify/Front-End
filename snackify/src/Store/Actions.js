import { axiosWithLoginAuth } from '../Utils/axiosWithLoginAuth'

export const UPDATE_SNACKS = 'update_snacks';
export const getCompanySnacks = user => dispatch => {
    axiosWithLoginAuth.get(``).then(res => {
        dispatch({ type: UPDATE_SNACKS, payload: res.data.snacks });
    });
};

export const UPDATE_SUGGESTIONS = 'update_suggestions';
export const getUserSuggestions = user => dispatch => {
    axiosWithLoginAuth.get(``).then(res => {
        dispatch({ type: UPDATE_SUGGESTIONS, payload: res.data.snacks });
    });
};

export const getCompanySuggestions = user => dispatch => {
    axiosWithLoginAuth.get(``).then(res => {
        dispatch({ type: UPDATE_SUGGESTIONS, payload: res.data.snacks });
    });
};

export const ADD_SNACK_TO_SUGGESTIONS = 'add_snacks_to_suggested';
export const addSnackToSuggestions = (snack) => dispatch => {
    // axiosWithLoginAuth
        // .post(``)
        // .then(res => {
            dispatch({ type: ADD_SNACK_TO_SUGGESTIONS, payload: snack });
        // });
};

export const ADD_SNACK_TO_ORDER = 'add_snack_to_order';
export const addSnackToOrder= (user, snack) => dispatch => {
    axiosWithLoginAuth
        .post(``)
        .then(res => {
            dispatch({ type: ADD_SNACK_TO_ORDER, payload: snack });
        });
};

