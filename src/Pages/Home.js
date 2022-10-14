import React from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  HomeBlock,
  LeftContent,
  WelcomeLeftContent,
  EyeBrow,
  SubText,
  ButtonContainer,
  WelcomeRightContent,
  WelcomeCard,
  NFTTrending,
  TableContainer,
  ContentText,
  NFTCollection,
  ExploreButton,
  CreateButton,
} from "./Home.styled.js";
import { TableContent } from "../Components/Table";
import { NFTCollections } from "../Components/NFTCollections";

const Home = () => {
  return (
    <HomeContainer>
      <HomeBlock>
        <LeftContent>
          <WelcomeLeftContent>
            <EyeBrow>Built by traders for traders</EyeBrow>
            <SubText>Brought to you by FTX!</SubText>
            <ButtonContainer>
              <Link to="/explore">
                <ExploreButton>Explore NFTs</ExploreButton>
              </Link>
              <Link href="https://ftx.us/" target="_blank">
                <CreateButton>
                  Learn More
                </CreateButton>
              </Link>
            </ButtonContainer>
          </WelcomeLeftContent>
        </LeftContent>
        <WelcomeRightContent>
            <WelcomeCard>
              <img alt="" src="./ftx_logo.png" />
            </WelcomeCard>
        </WelcomeRightContent>
      </HomeBlock>

      <NFTTrending>
        <TableContainer>
          <ContentText>Trending NFTs</ContentText>
          <TableContent />
        </TableContainer>
      </NFTTrending>

      <NFTCollection>
        <ContentText>NFT Collections</ContentText>
        <br />
        <NFTCollections data={{ network: "all" }} />
      </NFTCollection>
    </HomeContainer>
  );
};

export default Home;
