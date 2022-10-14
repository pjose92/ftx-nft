import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
`;

export const CardCotainer = styled.div`
  position: relative;
  padding: auto;
  margin: auto;
`;

export const NFTCard = styled.div`
  height: 500px;
  width: 350px;
  color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
`;

export const NFTImage = styled.img`
  position: absolute;
  height: 350px !important;
  width: 350px !important;
  bottom: 10px !important;
  right: 0 !important;
  @media(max-width: 805px){
    height: 350px !important;
    width: 350px !important;  
  }
`;

export const NFTContainer = styled.div`
  bottom: 0;
  text-align: left;
  left: 0;
  right: 0;
  position: absolute;
  word-wrap: normal;
  width: 350px;
  height: 84px;
  margin: auto;
  color: white;
  background-color: black;
  @media(max-width: 805px) {
    width: 350px !important;  
  }
`;

export const NFTDesc = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
`;
