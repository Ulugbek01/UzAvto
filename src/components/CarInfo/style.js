import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;

    .car-info__wrapper {
        display: flex;

        .car-info {
            max-width: 350px;
            width: 100%;
        }

        .car-info p{
            margin: 0;
            line-height: 1.8;
        }
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
`;