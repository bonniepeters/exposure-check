import React from 'react';
import { QuizData } from './QuizData';

class Quiz extends React.Component{
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: []
    }
    loadQuiz = () => {
        const { currentQuestion } = this.state;
        this.setState(() => {
            return {
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answer: QuizData[currentQuestion].answer            }
        })
    }

    componentDidMount() {
        this.loadQuiz();
    }
    render() {
        const { questions, options } = this.state;
        return (
            <div className="Quiz">
                {questions}
                {options.map(option => (
                    <p
                        key={option.id}
                    >
                        {option}
                    </p>
                    ))}
            </div>
        )
    }
}

export default Quiz;