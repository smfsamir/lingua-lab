import React, {useState} from 'react';
import Trial from './trial';
import { ProgressBar } from 'react-bootstrap';

function Quiz(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [questionBank, setQuestionBank] = useState(props.questionBank);

  const onCorrectAnswer = (firstAttempt) => {
    console.log("Correct answer!");
    document.getElementById('answer').value = '';
    // TODO: increment the times_correct value for the current question.
    const updatedQuestionBank = [...questionBank];
    if (firstAttempt) {
        updatedQuestionBank[currentQuestionIndex].times_correct += 1;
    }
    setQuestionBank(updatedQuestionBank);
    // Update the current question index.
    // increment it to the next question that is not completed.
    // if we get to the end of the array, start from the beginning of the array.
    // If the current question is not completed, then we can use it.
    // If the current question is completed, then we need to find the next question that is not completed.
    let currentIndex = currentQuestionIndex;
    let startIndex = currentQuestionIndex;
    if (currentIndex === questionBank.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }

    while (questionBank[currentIndex].times_correct === 2) {
        if (currentIndex === startIndex) {
            alert("You've completed the quiz for today! Come back later");
            return;
        }
        if (currentIndex === questionBank.length - 1) {
            currentIndex = 0;

        } else {
            currentIndex += 1;
        }
    }
    setCurrentQuestionIndex(currentIndex);


    // if (currentQuestionIndex < questionBank.length - 1) {
    //     setCurrentQuestionIndex(currentQuestionIndex + 1);
    // } else {
    //     setCurrentQuestionIndex(0);
    // }
    console.log(questionBank[currentQuestionIndex].times_correct)
  }

  // log the current question index.
  console.log("Current question index: " + currentQuestionIndex);

  {/* TODO: pass in the number of questions that have been correctly answered 3 times. */}
  let numCompleted  = 0;
  for (let i = 0; i < questionBank.length; i++) {
    if (questionBank[i].times_correct === 2) {
        numCompleted += 1;
    }
  }

//   if (numCompleted === questionBank.length) {
//     alert("You've completed the quiz! Come back later"); // TODO: update this.
//   }
  
  return (
    <div>
        <ProgressBar now={numCompleted} max={questionBank.length} color="red"/>
        <Trial 
        styles={props.styles} 
        target={questionBank[currentQuestionIndex].target}
        source={questionBank[currentQuestionIndex].source}
        maskIndex={questionBank[currentQuestionIndex].mask_index}
        onCorrectAnswer={onCorrectAnswer}
        timesCorrect={questionBank[currentQuestionIndex].times_correct}
        />
    </div>
  );
}

export default Quiz;