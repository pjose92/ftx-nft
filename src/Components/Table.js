import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ButtonContainer, TypeButton, Spinner } from "./Table.styled.js";

export const TableContent = () => {
  const dispatch = useDispatch();
  const [nftCollections, setNftCollections] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState("all");
  const [startNum] = useState("0");
  const [endNum] = useState("10");
  const [isLoading, setisLoading] = useState(true);

  // https://github.com/Rob--W/cors-anywhere/
  // API error. Cors link helps with that. 
  const getNftData = (network, start, end) => {
    setisLoading(true);
    let nftArr = [];
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/collections_page?collectionType=${network}&startInclusive=${start}&endExclusive=${end}`
      )
      .then((res) => {
        res.data.result.collections.map((data, index) => {
          nftArr.push({
            key: index,
            name: data.collectionDict.name,
            volume: data.volume.toFixed(2),
            total: data.total,
            network: data.issuer["mintSource"].toUpperCase(),
            allData: data,
          });
        });
        setNftCollections(nftArr);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNftData(selectedNetwork, startNum, endNum);
  }, [selectedNetwork, startNum, endNum]);

  // https://ant.design/components/table/
  const columns = [
    {
      title: "Collection",
      dataIndex: "name",
      key: "name",
      render: (name, index) => {
        return (
          <Link
            onClick={() => {
              dispatch((index));
              dispatch((nftCollections));
            }}
            to={`/gallery/${name}`}
          >
            {name}
          </Link>
        );
      },
    },
    {
      title: "Total Volume",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "Network",
      dataIndex: "network",
      key: "network",
    },
    {
      title: "Collection Size",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <>
      <ButtonContainer>
        <TypeButton disabled={isLoading} onClick={() => setSelectedNetwork("all")}>
          All
        </TypeButton>
        <TypeButton disabled={isLoading} onClick={() => setSelectedNetwork("sol")}>
          SOL
        </TypeButton>
        <TypeButton disabled={isLoading} onClick={() => setSelectedNetwork("eth")}>
          ETH
        </TypeButton>
        <TypeButton disabled={isLoading} onClick={() => setSelectedNetwork("ftx")}>
          FTX
        </TypeButton>
      </ButtonContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          columns={columns}
          dataSource={nftCollections}
          pagination={false}
        />
      )}
    </>
  );
};

export default TableContent;
