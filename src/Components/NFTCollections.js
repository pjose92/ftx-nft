import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, CardCotainer, NFTCard, NFTImage, NFTContainer, NFTDesc} from "./NFTCollection.styled.js";
import axios from "axios";
export const NFTCollections = (props) => {
  const [cards, setCards] = useState([]);
  const getIndividual = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/collections_page?collectionType=${props.data.network}&startInclusive=${12}&endExclusive=${20}`
      )
      .then((res) => {
        setCards(res.data.result.collections);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getIndividual();
  }, []);

  return (
    <Container>
      {cards.length === 0
        ? ""
        : cards.map((elm, index) => (
          <CardCotainer>
            <Link
                onClick={() => {}}
                to={`/gallery/${elm.collectionDict.name}`}
              >
            <NFTCard>
                <NFTImage
                  src={elm.first_nft.imageUrl}
                  alt=""
                />
              <NFTContainer>
                <NFTDesc>
                  {elm.collectionDict.name}
                </NFTDesc>
              </NFTContainer>
            </NFTCard>
            </Link>
          </CardCotainer>
          ))}
    </Container>
  );
};

export default NFTCollections;
