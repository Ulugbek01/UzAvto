import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 40px;

    & > .form-control {
        display: flex;

        & > div {
            padding: 12px;
        }
    }

    & input, label {
        width: 100%;
    }

    & input{
        padding: 8px 12px;
        background: #F4F4F4;
        border-radius: 12px;
        border: 1px solid #c1c4c9;
        outline: none;
        margin-bottom: 16px;
        margin-top: 6px;
    }

    & input:focus {
        border: 1px solid #9A9FA5;
    }

    & label {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #33383F;
        letter-spacing: -0.01em;
    }

    & .save-btn {
        padding: 10px 24px;
        background: #2A85FF;
        border-radius: 12px;
        cursor: pointer;
        border: none;
        outline: none;
        color: #fff;
    }

    & .go-back {
        display: block;
        margin-bottom: 20px;
        padding: 10px 20px;
        background: #2A85FF;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        color: #fff;
    }

    & .go-back:active {
        transform: scale(0.98);
    }
`;