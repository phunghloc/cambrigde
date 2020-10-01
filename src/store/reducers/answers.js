import * as actionTypes from '../actions/actionTypes';

const initialState = {
    answers: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_ANSWERS:
            return {
                ...state,
                answers: action.answers
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer;