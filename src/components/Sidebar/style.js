import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 240px;
    min-height: 100vh;
    background: #FCFCFC;
    padding: 24px;
    padding-top: 100px;

    .nav-link {
        display: flex;
        align-items: center;
        padding: 12px;
        margin-bottom: 8px;
    }

    .title {
        color: #6F767E;
        font-weight: 600;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        margin-left: 12px;
    }
`;
