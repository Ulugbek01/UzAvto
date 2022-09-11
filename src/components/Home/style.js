import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 20px;

    .table {
        border-collapse: collapse;

        .thead th{
            text-align: left;
            padding: 12px;
        }

        .tbody td{
            padding: 12px;
            font-size: 15px;
            line-height: 24px;
            letter-spacing: -0.01em;
            color: #1A1D1F;
        }

        .delete {
            cursor: pointer;
            margin-right: 10px;
        }

        .arrow-btn:hover {
            animation: 0.37s alternate anim infinite;
            cursor: pointer;
        }

        @keyframes anim {
            from {
                transform: translateX(0);
            }

            to {
                transform: translateX(4px);
            }
        }
    }
`;

export const AddWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    margin-bottom: 32px;
    padding: 12px;
`;

export const AddBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2A85FF;
    font-family: 'Inter', sans-serif;
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    outline: none;
    color: #fff;

    .add-icon {
        margin-right: 8px;
    }

    &:active {
        transform: scale(0.99);
    }
`;

export const Label = styled.span`
    display: inline-block;
    vertical-align: bottom;
    width: 16px;
    height: 32px;
    background: #FFD88D;
    border-radius: 4px;
    margin-right: 16px;
`;

