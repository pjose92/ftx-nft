import styled from 'styled-components';

export const HomeContainer = styled.div`
   width: 100%;
   height: 380vh;
`;

export const HomeBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 680px;
    @media(max-width: 800px) {
        flex-direction: column;
        height: 780px;
    }
`;

export const LeftContent = styled.div`
    flex: 1;
    position: relative;
    @media(max-width: 800px) {
        height: 200px;
    }
`;

export const WelcomeRightContent = styled.div`
    flex: 1;
    position: relative;
    @media(max-width: 800px) {
        height: 200px;
    }
`;

export const WelcomeLeftContent = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    width: 90%;
    position: absolute;
    top:0;
    bottom:0;
    left: 24px;
    margin: auto;
    text-align: left;
    height: 300px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: 0;
    margin: 1px 0 1px;
`;

export const ExploreButton = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 8px;
    border: 4px solid transparent;
    font-size: 16px;
    margin: 4px 10px;
    background-color: #009bf5;
    color: black;
`;

export const CreateButton = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 8px;
    border: 4px solid transparent;
    font-size: 16px;
    margin: 4px 10px;
    background-color: rgb(0, 0, 0);
    color: white;
`;

export const EyeBrow = styled.p`
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 0;
`;

export const SubText = styled.p`
    font-size: 24px;
    margin-bottom: 0;
`;

export const WelcomeCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    margin: auto;
    width: 64%;
    height: 64%;
    border-radius: 8px;

    img {    
        height: 342px;
        width: 342px;
        border-radius: 8px 8px 0 0;
    }

    @media(max-width: 800px) {
        height:226px;
        width: 390px;
        position: relative;
        flex-direction: row;
    }
`;

export const NFTTrending = styled.div`
    position: relative;
    height: 780px;
`;

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`;

export const ContentText = styled.p`
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 24px;
    color: black;
`;

export const NFTCollection = styled.div`
    position: relative;
    margin-top: 300px;
    height: 780px;
    @media(max-width: 800px) {
        margin-top: 600px;
    }
`;
