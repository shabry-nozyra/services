"use client";
import { useState } from "react";
import Image from "next/image";



const Meetup = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section
                className="bg-white dark:bg-gray-900 relative overflow-hidden"
                style={{
                    paddingTop: "100px",
                    paddingBottom: "100px",
                }}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/hero/hero2.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.7,
                    }}
                    aria-hidden="true"
                />
                <div className="relative z-10">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <a
                            href="#"
                            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                            role="alert"
                        >
                            <span className="text-xs bg-meta rounded-full text-white px-4 py-1.5 mr-3">
                                Promo
                            </span>{" "}
                            <span className="text-sm font-medium">
                                Free Installation and Setup
                            </span>
                            <svg
                                className="ml-2 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                            Meet Your Marketplace
                        </h1>
                        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                            <div className="flex flex-wrap justify-center items-center mt-20">
                                <img
                                    className="h-1/2 rounded-4xl"
                                    src="/images/hero/icon.jpg"
                                    alt="icon-image-marketplace" />
                            </div>
                            <div className="mt-10">
                                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-dark rounded-lg bg-white hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                    Get explore services
                                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-meta border border-gray-300 rounded-lg hover:bg-meta focus:ring-4 focus:ring-gray-100 dark:text-white  hover:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    Request a Demo
                                </a>
                                {/* 
                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Meetup;