import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Layout, Row, Col } from "antd";
import { CardWrapper } from "./Gallery.styled.js";
import { NftCard } from "../../Components/NftCard";

const { Content } = Layout;

export const Gallery = () => {
  let { slug } = useParams();
  const [collectionInfo, setCollectionInfo] = useState([]);
  const [startNum] = useState("0");
  const [endNum] = useState("18");

  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const getIndividual = (collection, start, end) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/nfts_filtered?startInclusive=${start}&endExclusive=${end}&nft_filter_string=${collection}`
      )
      .then((res) => {
        setCollectionInfo(res.data.result.nfts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getIndividual(JSON.stringify({ collection: slug }), startNum, endNum);
  }, []);

  return (
    <>
      <Layout>
        <Content>
          <CardWrapper>
            {sliceIntoChunks(collectionInfo, 3).map((elm) => (
              <Row gutter={16}>
                {elm.map((nft) => (
                  <Col span={8}>
                    <NftCard key={nft.id} data={{ nft }}></NftCard>
                  </Col>
                ))}
              </Row>
            ))}
          </CardWrapper>
        </Content>
      </Layout>
    </>
  );
};

export default Gallery;
