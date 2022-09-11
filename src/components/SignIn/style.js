import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #c1c4c9;
    margin: 0 auto;
    padding: 40px;
    margin-top: 100px;


    & input {
        width: 100%;
        padding: 6px 12px;
        border: 1px solid #c1c4c9;
        outline: none;
        margin-bottom: 10px;
        border-radius: 6px;

        &:focus {
            border: 1px solid #18AD40;
        }
    }

    .enter-btn {
        width: 100%;
        padding: 8px 0;
        background-color: #2A85FF;
        border-radius: 4px;
        margin-top: 16px;
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;

        &:active {
            transform: scale(0.99);
        }
    }

    .error {
        color: red;
        align-self: flex-start;
        font-size: 13px;
    }
`;
