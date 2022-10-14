import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 300px;
  width: 270px;
  display: flex;
  flex-direction: column;
  margin: 30px 12px;
`;

export const NftImg = styled.img`
  border-radius: 8px 8px 0 0;
  height: 240px;
  width: 270px;
  background-color: #0b0e16;
  margin: auto;
  position: relative;
  z-index: 99;
`;

export const InfoContainer = styled.div`
  background-color: black;
  color: white;
  width: 270px;
  margin: auto;
  position: relative;
  height: 80px;
  margin-top: -8px;
  padding: 8px;
`;

export const NFTName = styled.p`
  top: 20px;
  position: absolute;
`;
