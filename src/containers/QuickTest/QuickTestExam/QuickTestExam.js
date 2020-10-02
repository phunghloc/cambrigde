import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions/actions';
import './QuickTestExam.css';
import Question from '../../../components/UI/Question/Question';

const QuickTestExam = (props) => {
    const length = props.questions || 0;
    const [answersList, setAnswersList] = useState(Array(length).fill(''));
    function setAnswers(index, answer) {
        const newAnswersList = [...answersList];

        newAnswersList[index] = answer;
        setAnswersList(newAnswersList);
    }

    if (!length) return (<Redirect to='/' />);

    const questions = props.questions.map((question, index) => {
        return (
            <Question 
                data={question} 
                key={index}
                order={index + 1}
                clicked={(index, answer) => setAnswers(index, answer)}
                index={index}
                onChoose={answersList[index]}
            />
        );
    })
    return (
        <Container className="Exam-Screen pb-5">
            <div className="QuickTestIntro-Title pl-4 mb-5">
                <h3>General English</h3>
            </div>
            <h2 className="ml-4">TEST YOUR ENGLISH</h2>
            <p className="mb-5 ml-4">For the questions below, please choose the best option to complete the sentence or conversation.</p>

            {questions}
            <div className="Exam-Screen-SendBtn">
                <Link to='/quick-test-exam/result'>
                    <Button 
                        className='btn btn-primary py-2 px-4 mb-5'
                        onClick={()=>props.sendAnswer(answersList)}
                    >
                        GET RESULT
                    </Button>
                </Link>
            </div>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        questions: state.questions.questions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        beginFetchQuestion: () => dispatch(actions.onFetchQuestion()),
        sendAnswer: (answers) => dispatch(actions.sendAnswers(answers)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickTestExam);