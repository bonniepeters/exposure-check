import React, { Component } from "react";
import listOfQuestions from "./Questions.json";

class Questionnaire extends Component {
  state = {
    currentQuestion: listOfQuestions[0],
    userAnswer: null,
    potentialPoints: 0,
    userPoints: 0,
    quizComplete: false
  };


  render() {
    const questions = listOfQuestions.map(question => {
      return (
        <form>
          <label>{question.question}
            {question.options.map(option => {
              return (
                <label>
                <input type="radio" value={option}/>
                  {option}
                  </label>
              )
            })}
          </label>
        </form>
      )
    })
      return (
        <div className="Question">
          <>
            {questions}
          </>
        </div> 
      );
    }
  }

export default Questionnaire;