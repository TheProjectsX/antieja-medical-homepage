import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <main className="p-6">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
