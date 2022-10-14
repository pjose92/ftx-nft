import React from "react";
import { NFTCollections } from "../../Components/NFTCollections";
import {ExploreContainer, ExploreHeader} from "./Explore.styled.js";

export const Explore = () => {
  return (
    <ExploreContainer>
      <div>
        <ExploreHeader>Popular Solana</ExploreHeader>
        <NFTCollections data={{ network: "sol" }} />
      </div>
      <div>
        <ExploreHeader>Popular ETH</ExploreHeader>
        <NFTCollections data={{ network: "eth" }} />
      </div>
      <div>
        <ExploreHeader>Popular FTX</ExploreHeader>
        <NFTCollections data={{ network: "ftx" }} />
      </div>
    </ExploreContainer>
  );
};
export default Explore;
