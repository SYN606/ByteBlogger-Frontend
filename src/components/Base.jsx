import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from ".";

export default function Base() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

