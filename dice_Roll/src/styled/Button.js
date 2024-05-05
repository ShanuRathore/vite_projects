import styled from 'styled-components';

export const Button = styled.button`
    color:white;
    background-color:black;
    border-radius:5px;
    padding:10px;
    border:none;
    min-width:220px;
    font-size:16px;
    cursor:pointer;
    border:1px solid transparent;
    transition : .4s background ease-in;

    &:hover{
        background-color:white;
        border: 1px solid black;
        color:black;
        transition : .3s background ease-in;
    }
`;
export const OutlineButton = styled(Button)`
    background-color:white;
    border:1px solid black;
    color: black;
    &:hover{
        background-color:black;
        border: 1px solid transparent;
        color:white;
        transition : .3s background ease-in;
    }
`;

