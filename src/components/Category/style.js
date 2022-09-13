import styled from "styled-components";

export const Container = styled.div`
    padding: 82px 94px;

    .car-title {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        text-transform: uppercase;
        color: #000;
    }

    .cars-wrapper {
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
        }
    }

    .price {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #000;

        & span {
            color: rgba(0, 0, 0, 0.8);
        }
    }
`;