import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-bottom: 15%;
    }
`;

export const Form = styled.form`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: center;
    flex-direction: column;

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
