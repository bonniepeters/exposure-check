import React, { Component } from "react";
import listOfQuestions from "./Questions.json";

class Questionnaire2 extends Component {
  state = {
    currentQuestion: 0,
    userAnswer: null,
    options: [],
    potentialPoints: 0,
    userPoints: 0,
    quizComplete: false
  };


  render() {
    const questions = listOfQuestions.map(question => {
      return (
        <>
          <li>{question.question}
            {question.options.map(option => {
              return(
                <li>{option}</li>
              )
            })}
          </li>
        </>
      )
    })
      return (
        <div className="Question">
          <p>
            {questions}
          </p>
        </div> 
      );
    }
  }

export default Questionnaire2;