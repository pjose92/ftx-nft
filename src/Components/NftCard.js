import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { CardContainer, NftImg, InfoContainer, NFTName } from "./NftCard.styled.js";
import "./NFTCard2.css";

export const NftCard = (props) => {
  return (
    <CardContainer>
      <Link to="/">
        <NftImg alt="NFT" src={props.data.nft.imageUrl} />
        <InfoContainer>
          <NFTName>{props.data.nft.name}</NFTName>
        </InfoContainer>
      </Link>
    </CardContainer>
  );
};

export default NftCard;
