import styled from 'styled-components';

export const Form = styled.form`
    border: 2px solid #000000;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 10px;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    background: #ffffff63;
`;

export const Button = styled.button`
    width: 100px;
    cursor: pointer;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    background-image: linear-gradient(rgb(233 230 118 / 84%),rgb(145 112 14) 50%);
    border-radius: 10px;
    border-width: 0;
    box-shadow: rgb(219 201 146) 0 2px 2px, rgb(147 102 34 / 27%) 0 8px 12px;    color: #FFFFFF;
    font-size: 10px;
    font-weight: 700;
    padding: 10px 5px;
    text-align: center;
    text-decoration: none;  
    
    &:hover {
      background-image: linear-gradient(#504902,#523d00 50%);
    }
`;