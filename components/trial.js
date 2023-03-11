import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import SourceBlock from './source_block';



function Trial(props) {
  const [answer, setAnswer] = useState('');
  // create a state variable for whether we should display the answer or not.
  const [displayAnswer, setDisplayAnswer] = useState(false);
  // create a state variable for whether this is the first attempt or not.
  const [firstAttempt, setFirstAttempt] = useState(true);
  
  function checkAnswer() {
    const correctAnswer = props.source.split(' ')[props.maskIndex];
    if (correctAnswer === document.getElementById('answer').value) {
      alert('Correct!');
      props.onCorrectAnswer(firstAttempt);
      setAnswer(''); // TODO: do we need this? 
      setDisplayAnswer(false);
      setFirstAttempt(true);
    } else {
      setFirstAttempt(false);
      alert('Incorrect!');
      // clear the input field.
      document.getElementById('answer').value = '';
      setDisplayAnswer(true);
    }
  }

  let progressBarValue = props.timesCorrect / 2;
  // make progress bar value a string.
  progressBarValue = progressBarValue.toString();
  // log the progress bar value.
  console.log("Progress bar value: " + progressBarValue);
  let placeholderAnswer = props.source.split(' ')[props.maskIndex];
  return (
    <div className={props.styles.grid}>
      <div className={props.styles.card}>
        <h3>Nłeʔkepmxcin</h3>
        <div style={{display: 'inline-block'}}>
          <SourceBlock sourceSentence={props.source} maskIndex={props.maskIndex} 
            placeholderAnswer={placeholderAnswer} displayAnswer={displayAnswer}/>
        </div>
      </div>

      <div className={props.styles.card}>
        <h3>English</h3>
        <p>{props.target}</p>
      </div>
      
      <div style={{ position: 'relative' }}>
        <progress value={progressBarValue} max="1" style={{ position: 'absolute', top: '-15px', left: 0, right: 0 }} />
        <button onClick={checkAnswer}>Submit</button>
      </div>
    </div>
  );
}

export default Trial;