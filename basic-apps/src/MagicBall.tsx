
import React, { useState } from 'react';
import magicball from './assets/magicball.png'


function MagicBall(){

    const answers=['yes','no','brother,ew'];

    const[generateAnswer, setGenerateAnswer]= useState('');
    let randNum;

    const magicBall = () =>{
         randNum = Math.floor(Math.random() * answers.length);
        setGenerateAnswer(answers[randNum]);

    }
    console.log()

    return(
        <>
        <h1 className="text-3xl font-bold underline" >magic ball</h1>
        <img className='animate-bounce' src={magicball}></img>
        <button onClick={magicBall}>Generate Random Word</button>
        {generateAnswer && <p>{generateAnswer}</p>}
        </>
    )
}


export default MagicBall;