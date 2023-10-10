import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = (props) => {
    return (
        <div className="wrap">
            <Header />
            <main id="main">{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
