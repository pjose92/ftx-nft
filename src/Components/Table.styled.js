import styled from 'styled-components';

export const ButtonContainer = styled.div`
    margin: 10px auto 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
;`

export const TypeButton = styled.button`
    background: black;
    margin: 10px;
    border-radius: 999px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
`;

export const Spinner = styled.div`
    border: 16px solid black;
    border-top: 16px white solid;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    animation: spin 2s linear infinite;
    right: 50%;
    position: absolute;
    top: 50%;
    left: 50%;

    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }

        100% {
        transform: rotate(360deg);
        }
    }
`;
