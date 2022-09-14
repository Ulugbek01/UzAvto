import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 94px;

    .car-info__wrapper {
        display: flex;

        .car-info {
            max-width: 350px;
            width: 100%;

            & .car-left__img {
                width: 348px;
                height: 160px;
                margin: 16px 0;
            }
        }

        .car-info p{
            margin: 0;
            line-height: 1.8;
        }
    }

    .title {
        font-family: 'Noto Sans';
        font-weight: 600;
        font-size: 42px;
        line-height: 48px;
        color: #000000;
    }

    .selected-btns {
        justify-content: space-evenly;

        & label {
            margin-right: 8px;
            color: #000;
        }
    }


    .full-car__img {
        padding: 0 30px;
    }

    .home-fill {
        cursor: pointer;
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