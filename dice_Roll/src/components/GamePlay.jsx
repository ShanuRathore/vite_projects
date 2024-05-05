import React, { useState } from 'react'
import TotalScore from './TotalScore'
import Numberelector from './Numberelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

function GamePlay() {
    const[score,setScore]=useState(0);
    const [selectedNum, setSelectedNumber] = useState();
    const [currentDice,setCurrrentDice] =useState(1);
    const[error,setError]=useState('');
    const[showRules,setShowRules]=useState(false);

    const generateRandomNumber=()=>{
        // const randomNumber=Math.floor(Math.random()*(max-min)+min);
        return Math.floor(Math.random()*6+1);
    }

    const roleDice=()=>{
        const randomNumber=generateRandomNumber();
        setCurrrentDice(()=>randomNumber);

        if(!selectedNum) {
            setError('Please select a number first');
            return;
        }
        // console.log(error)

        if(setSelectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber);
        }else{
            setScore((prev)=>prev-1);
        }
        setSelectedNumber(undefined)
    }

    const resetScore=()=>{
        setScore(0)
    }

    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score}/>
                <Numberelector setError={setError} error={error} selectedNum={selectedNum} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice currentDice={currentDice} roleDice={roleDice}/>
            <div className='btns'>
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show" } Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 5px;
    .top_section{
        display: flex;
        ${'' /* justifyContent: space-between; */}
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        gap: 10px;
        justify-content: center;
        ${'' /* max-width: 220px; */}
        align-items: center;
    }
`;