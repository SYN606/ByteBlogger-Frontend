import React from "react";
import { Title } from "react-head";

export default function NotFoundPage() {
    return (
        <>
            <Title>ByteBloggers - Page not found</Title>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-lg text-gray-500 sm:text-xl">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                        >
                            Go back home
                        </a>
                        <a href="/contact" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}
