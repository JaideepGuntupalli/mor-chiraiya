import * as React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <NavBar />
            <main className="px-8 md:px-20 bg-[#fffdf1]">
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
