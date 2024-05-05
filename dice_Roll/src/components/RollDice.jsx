import styled from 'styled-components'

function RollDice({currentDice,roleDice}) {
  return (
    <DiceContainer>
        <div className='dice'
            onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center; 
    
    .dice{
        cursor:pointer;
    }
    .dice img{
        width:200px;
        height:200px
    }
    p{
        font-size:20px;
    }

`;