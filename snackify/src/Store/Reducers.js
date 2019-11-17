import {
    UPDATE_SNACKS,
    UPDATE_SUGGESTIONS,
    ADD_SNACK_TO_SUGGESTIONS,
    ADD_SNACK_TO_ORDER,
} from '../actions/snackActions';

const initState = {
    order: [],
    suggestions: [],
    snacks: [],
};

export const snackReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_SNACKS:
            return {
                ...state,
                order: action.payload,
            };
        case UPDATE_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload,
            };
        case GET_ALL_SNACKS:
            return {
                ...state,
                snacks: action.payload,
            };
        case ADD_SNACK_TO_SUGGESTIONS:
            return {
                ...state,
                suggestions: [...state.suggestions, action.payload],
            };
        case ADD_SNACK_TO_ORDER:
            return {
                ...state,
                order: [...state.order, action.payload],
            };
        default:
            return state;
    }
};