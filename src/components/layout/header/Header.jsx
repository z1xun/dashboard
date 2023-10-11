import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";

// function Header (){}
const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>
                <Link to="/">logo</Link>
            </Logo>
            <Gnb />
        </HeaderWrapper>
    );
};

const Logo = styled.h1`
    font-size: 30px;
    color: white;
`;

//const 변수명 = styled.태그명``;
const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: lightcoral;
    padding: 0 20px;
`;

export default Header;
