import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 64px;
    width: 100%;
    color: white;
    background-color: black;
`;

export const HeaderCenter = styled.div`
    flex: 1;
    position: relative;
`;

export const Logo = styled.img`
    position: absolute;
    height: 48px;
    top: 8px;
    left: 40%;
    cursor: pointer;
    @media(max-width: 800px) {
        top: 16px;
        left: 5px;
        height: 30px;
    }
`;