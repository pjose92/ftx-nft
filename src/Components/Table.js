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
  const [startNum, setStartNum] = useState("0");
  const [endNum, setEndNum] = useState("10");
  const [isLoading, setisLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState([])

  // https://github.com/Rob--W/cors-anywhere/
  // https://cors-anywhere.herokuapp.com/corsdemo
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


  const decrease = (start, end) => {
    if (Number(start) === 0) {
      return {
        start: "0",
        end: "10",
      };
    } else {  
      return {
        start: (Number(start) - 10).toString(),
        end: (Number(end) - 10).toString(),
      };
    }
  };
    
  const increase = (start, end) => {  
    return {
      start: (Number(start) + 10).toString(),
      end: (Number(end) + 10).toString(),
    };
  };


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
      
      <div>
        <TypeButton
        onClick={() => {
          const previous = decrease(startNum, endNum);
          setStartNum(previous.start);
          setEndNum(previous.end);
          setCurrentPage(
            currentPage.map(function (i) {
              return i - 1;
            })
          );
        }}
        >
          previous
        </TypeButton>
        <TypeButton
        onClick={() => {
          const next = increase(startNum, endNum);
          setStartNum(next.start);
          setEndNum(next.end);
          setCurrentPage(
            currentPage.map(function (i) {
              return i + 1;
            })
          );
        }}
        >
          next
        </TypeButton>
      </div>
    </>
  );
};

export default TableContent;
