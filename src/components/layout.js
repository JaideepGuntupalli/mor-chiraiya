import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav className="flex justify-between items-center p-6 px-20">
                <h2 className="font-bold text-3xl">Mor-Chiraiya</h2>
                <ul className="flex gap-12 font-semibold text-xl">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <main className="px-20">
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
