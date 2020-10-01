import * as actionTypes from '../actions/actionTypes';

const initialState = {
    questions: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_QUESTIONS_SUCCESS: 
            return {
                ...state,
                questions: action.questions,
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducer;