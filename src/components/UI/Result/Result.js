import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import './Result.css';
import Question from './Question/Question';

const result = (props) => {
    if (!props.questions) {
        return <Redirect to='/' />;
    }

    const correct = props.questions.reduce((total, element, index) => {
        total += element.correct === props.answers.answers[index] ? 1 : 0;
        return total;
    }, 0)

    const questions = props.questions.map((question, index) => {
        return (
            <Question 
                data={question} 
                key={index}
                order={index + 1}
                answer={props.answers.answers[index]}
            />
        );
    })

    return (
        <Container className="Exam-Screen pb-5">
            <div className="QuickTestIntro-Title pl-4 mb-5">
                <h3>General English - Your Result</h3>
            </div>
            <h2 className="ml-4">Well done for completing the test!</h2>
            <h3 className="mt-2 mb-5 ml-4">Your score is 
                <span className="text-success"> {correct} </span>
                 out of 
                {' ' + props.questions.length}
            </h3>
            {questions}
        </Container>
    );   
}

const mapStateToProps = state => {
    return {
        questions: state.questions.questions,
        answers: state.answers,
    }
}

export default connect(mapStateToProps)(result);