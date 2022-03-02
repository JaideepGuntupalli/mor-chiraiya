import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Header />
            <main className="bg-[#fffdf1]">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
