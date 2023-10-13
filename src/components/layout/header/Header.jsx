import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Heading } from "@chakra-ui/react";

// function Header (){}
const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderStyle as="h1" className="logo">
                <Link to="/">logo</Link>
            </HeaderStyle>
            <Gnb />
        </HeaderWrapper>
    );
};

const HeaderStyle = styled(Heading)`
    font-size: 30px;
    color: white;
`;

//const 변수명 = styled.태그명``;
const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    background-color: var(--primary-1);
    padding: 0 20px;
    width: 20%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    flex-direction: column;
`;

export default Header;
