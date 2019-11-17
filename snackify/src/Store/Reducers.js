import {
    UPDATE_SNACKS,
    UPDATE_SUGGESTIONS,
    ADD_SNACK_TO_SUGGESTIONS,
    ADD_SNACK_TO_ORDER,
} from './Actions';

const initState = {
    order: [],
    suggestions: [],
    snacks: [
        { Name: 'Cheetos', Calories: '310 per serving', Fat: '21g per serving', Sugar: '2g per serving', Protien: '3g per serving', Carbs: "25g per serving", Allergens: "Milk Ingredients", Weight: '28g', Price: "$1.00" }, { Name: 'Kapop Chips', Calories: '110 per serving', Fat: '4g per serving', Sugar: '1g per serving', Protien: '3g per serving', Carbs: "17g per serving", Allergens: "Dairy, Wheat, Soy", Weight: '28g', Price: "$1.00" },{ Name: 'Nature Valley Bar', Calories: '190 per serving', Fat: '6g per serving', Sugar: '12g per serving', Protien: '4g per serving', Carbs: "29g per serving", Allergens: "Soy, Nut Products", Weight: '28g', Price: "$1.00" }
    ],
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