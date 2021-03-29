import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    justify-content: space-between;
    align-items: center;
`;

export const Head = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-align: center;
`;

export const Form = styled.form`
    width: 100vw;

    input, select, option {
        width: 20vw;
        background-color: #c2c2c2;
        text-align: center;
        height: 5vh;
        border-radius: 10px;
        outline: 0;
        cursor: pointer;
        :hover {
            background-color: #c9c9c9
        }
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 1%;
    }
`;  
