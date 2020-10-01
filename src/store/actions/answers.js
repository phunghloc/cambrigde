import * as actionTypes from './actionTypes';

export const sendAnswers = (answers) => {
    return {
        type: actionTypes.SEND_ANSWERS,
        answers: answers,
    }
}