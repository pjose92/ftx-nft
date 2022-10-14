import React from "react";
import { Link } from "react-router-dom";
import { Container, HeaderCenter, Logo } from "./Header.styled.js";

const Header = () => {
  return (
    <Container>
      <HeaderCenter>
        <Link to="/">
          <Logo src="./ftx_nft.png"></Logo>
        </Link>
      </HeaderCenter>
    </Container>
  );
};

export default Header;
