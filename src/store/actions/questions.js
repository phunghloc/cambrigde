import * as actionTypes from './actionTypes';
import questions from '../../assets/data/questions';

export const onFetchQuestion = () => {
    const randomQuestion = 
        Array.from(Array(questions.length), (value, index) => index)
        .sort(() => Math.random() - 1).slice(0,4)
        .map(index => questions[index]);

    return {
        type: actionTypes.GET_QUESTIONS_SUCCESS,
        questions: randomQuestion,
    }
}