import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Table = styled.table`
    width: 80%;
    border: 0.5px solid black;

    * {
        text-align: center;
    }

    .novalue {
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        cursor: pointer;
        outline: 0;
        background-color: transparent;
    }
`;

