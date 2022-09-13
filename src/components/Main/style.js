import styled from "styled-components";

export const Container = styled.div`
    padding: 42px 94px;

    & .title {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 42px;
        line-height: 63px;
    }

    & .login {
        display: block;
        margin-left: auto;
        margin-bottom: 20px;
        padding: 10px 30px;
        background: #2A85FF;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        color: #fff;
    }

    & .login:active {
        transform: scale(0.98);
    }
`;

export const CarsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    & .car-item {
        width: 289px;
        height: 268px;
        cursor: pointer;
        transition: all 0.31s linear;
    }

    & .car-item:hover {
        transform: scale(1.04);
        overflow: hidden;
    }

    & .category-title {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        text-transform: uppercase;
        color: #000;
        text-align: center;
    }
`;