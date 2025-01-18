import React from "react";
import { Title } from "react-head";

import { FeaturedArticle, HeroSection } from "../components";


export default function Homepage() {
    return (
        <>
            <Title>ByteBloggers - Homepage</Title>
            <div className="bg-gray-900">
                <HeroSection />
                <FeaturedArticle />
            </div>
        </>
    );
}