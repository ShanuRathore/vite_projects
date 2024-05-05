import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play Dice game</h2>
        <div className='text'>
            <p>1.Select any number</p>
            <p>2.Click on the dice button</p>
            <p>3.After clicking on the dice if selected number is equal to dice number you will get same points as dice {""} </p>
            <p>4.If you guess wrong than 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer =styled.div`
    max-width:850px;
    background-color: #FBF1F1;
    padding: 10px;  
    margin:10px auto;
    border: 1px solid orange;
    border-radius:10px;
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    .text{
        margin-top:10px;
    }
`;

