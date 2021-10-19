import Head from "next/head";
import React, { useState } from "react";

import AdminContainer from "@/components/AdminContainer";
import AdminProfile from "@/components/AdminProfile";
import Header from "@/components/Header";

function ServerButton() {
    const [clicked, setClicked] = useState(false);
    const SERVER_URL = "mc.holyland.my.id";

    let classString = "bg-gray-700 hover:bg-gray-600 border-gray-700 hover:border-gray-600";
    if (clicked) {
        classString = "bg-gray-600 border-green-600 hover:border-green-500";
    }

    const copyButton = () => {
        setClicked(true);
        navigator.clipboard.writeText(SERVER_URL);
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    };

    return (
        <div
            className={`flex flex-row justify-center px-5 py-3 ${classString} transition mt-4 rounded-lg cursor-pointer border-[3px]`}
            onClick={copyButton}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
            </svg>
            <div className="pointer-events-none select-none">{SERVER_URL}</div>
        </div>
    );
}

function MapButton() {
    return (
        <a href="http://holyland.my.id:8100/" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row justify-center px-5 py-3 bg-gray-700 hover:bg-gray-600 border-gray-700 hover:border-gray-600 transition mt-4 rounded-lg cursor-pointer border-[3px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                </svg>
                <div className="pointer-events-none select-none">Peta Dunia</div>
            </div>
        </a>
    );
}

export default function Main() {
    return (
        <>
            <Head>
                <title>Holyland</title>
                <meta name="description" content="" />
            </Head>
            <Header />
            <main className="w-full px-4 md:px-7 lg:px-10 Inter-Font">
                <div className="flex flex-col items-center">
                    <div className="text-lg font-bold text-center">Ayo bergabung sekarang!</div>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                        <ServerButton />
                        <MapButton />
                    </div>
                    <hr className="w-full mt-5 border-gray-600" />
                    {/* <AdminContainer className="mt-6">
                        <AdminProfile
                            name="N4O"
                            image="https://cdn.discordapp.com/avatars/466469077444067372/95d2673b3cd4d66e73e2bb05a6f8df31.png?size=1024"
                        >
                            Owner
                        </AdminProfile>
                    </AdminContainer> */}
                </div>
            </main>
        </>
    );
}
