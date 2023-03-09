import React, {useState} from 'react';

function SourceBlock(props) {
    console.log("rendering source block");
    console.log("Mask index: " + props.maskIndex);
    // TODO: split the sentence into words, then mask out the word at the mask index.
    let splitSentence = props.sourceSentence.split(' ');
    // splitSentence[this.maskIndex] = <input id="answer" classname={{nowrap: 'True'}} style={{'width': '10ch'}}></input>;
    // build up the <p> element with the masked sentence.
    let maskedSentence = '';
    let word;

    // Create two variables. Masked sentence left and masked sentence right. Containing the substring from combining all the elements in the split sentence array to the left and right of the mask index.
    let maskedSentenceLeft = '';
    let maskedSentenceRight = ' ';
    // loop through the split sentence array until we reach the mask index for building the masked sentence left.
    for (let i = 0; i < props.maskIndex; i++){
        word = splitSentence[i];
        maskedSentenceLeft += word + ' ';
    }

    // loop through the split sentence array from the mask index to the end of the array for building the masked sentence right.
    for (let i = props.maskIndex + 1; i < splitSentence.length; i++){
        word = splitSentence[i];
        maskedSentenceRight += word + ' ';
    }

    if (props.displayAnswer) {
        return (<p>{maskedSentenceLeft}<input id="answer" placeholder={props.placeholderAnswer} className={{nowrap: 'True'}} style={{'width': '10ch'}}></input>
         {maskedSentenceRight}</p>);
    } else {
        return (<p>{maskedSentenceLeft}<input id="answer" className={{nowrap: 'True'}} style={{'width': '10ch'}}></input>
         {maskedSentenceRight}</p>);
    }

}

export default SourceBlock;