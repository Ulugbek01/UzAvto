import styled from "styled-components";

export const Container = styled.div`
    padding: 42px 94px;

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
        gap: 10px;

        & .car-item {
            width: 282px;
            height: 268px;
            cursor: pointer;
            transition: all 0.31s linear;

            & img {
                width: 282px;
                height: 268px;
                object-fit: cover;
            }
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