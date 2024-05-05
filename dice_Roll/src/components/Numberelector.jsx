
import styled from 'styled-components'

function Numberelector({setError, error,selectedNum, setSelectedNumber}) {

    const arrNumbers = [1, 2, 3, 4, 5, 6]
    //  console.log(error)

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        setError('')
    }


    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {
                    arrNumbers.map((value, i) => (
                        <Box
                            isSelected={value === selectedNum}        //will return true if they are equal on the bases of that change color
                            key={i}       //unique key for each element
                            onClick={() => numberSelectorHandler(value)}
                        >
                            {value}
                        </Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default Numberelector

const NumberSelectorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
    margin-left:620px;
    .flex{
        display:flex;
        gap:24px;
    }
    p{
        font-size:20px;
        font-weight:bold;
    }
    .error{
        color:red;
        font-size:20px;
    }
`;

const Box = styled.div`
    height:52px;
    width:52px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;    
    cursor:pointer;
    background-color:${(props) => (props.isSelected ? 'black' : 'white')};
    color:${(props) => (props.isSelected ? 'white' : 'black')};
`;