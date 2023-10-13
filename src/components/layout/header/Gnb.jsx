import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
    return (
        <GnbWrapper>
            <ul>
                <li>
                    <Link to="/">dashboard</Link>
                </li>
                <li>
                    <Link to="/about">feed</Link>
                </li>
                <li>
                    <Link to="/about">statisics</Link>
                </li>
                <li>
                    <Link to="/about">teams</Link>
                </li>
                <li>
                    <Link to="/about">project</Link>
                </li>
                <li>
                    <Link to="/about">settings</Link>
                </li>
            </ul>
        </GnbWrapper>
    );
};

const GnbWrapper = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        li {
            margin-left: 10px;
            a {
                color: #333;
            }
        }
    }
`;

export default Gnb;
