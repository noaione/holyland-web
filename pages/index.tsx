import Head from "next/head";
import React, { useState } from "react";

// import AdminContainer from "@/components/AdminContainer";
// import AdminProfile from "@/components/AdminProfile";
import Header from "@/components/Header";
import PlayerCount from "@/components/PlayeCount";
import Kabinet from "@/components/Kabinet";

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
        <a href="http://mc.holyland.my.id:8100/" target="_blank" rel="noopener noreferrer">
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

function DiscordButton() {
    return (
        <a href="https://discord.gg/Ur4aJucdM7" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row justify-center px-5 py-3 bg-gray-700 hover:bg-gray-600 border-gray-700 hover:border-gray-600 transition mt-4 rounded-lg cursor-pointer border-[3px]">
                <svg
                    className="h-6 w-6 text-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                <div className="pointer-events-none select-none ml-2">Discord</div>
            </div>
        </a>
    );
}

export default function Main() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Head>
                <title>Holyland</title>
                <meta name="description" content="Selamat datang di Holyland" />
            </Head>
            <Header />
            <main className="w-full px-4 md:px-7 lg:px-10 Inter-Font">
                <div className="flex flex-col pb-8 items-center">
                    <div className="text-lg font-bold text-center">Ayo bergabung sekarang!</div>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                        <ServerButton />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                        <MapButton />
                        <DiscordButton />
                    </div>
                    <PlayerCount />
                    <hr className="w-full mt-5 border-gray-600" />
                    <h2 className="my-4 text-xl font-bold">Kabinet</h2>
                    <Kabinet.Container>
                        <Kabinet.Card name="Kresendo" role="Presiden" />
                        <Kabinet.Card name="JackLumber" role="Wakil Presiden" />
                    </Kabinet.Container>
                    <Kabinet.Container className="mt-4">
                        <Kabinet.Card name="kresbayyy" role="Pengawas" />
                        <Kabinet.Card name="N4O" role="Pengawas" />
                        <Kabinet.Card name="Vincent" role="Pengawas" />
                        <Kabinet.Card name="ceng" role="Pengawas" />
                    </Kabinet.Container>
                    <Kabinet.Container className="mt-4 mb-4">
                        <Kabinet.Card name="furashu" role="Menteri" />
                        <Kabinet.Card name="batrix" role="Menteri" />
                        <Kabinet.Card name="kiwwwwi" role="Menteri" />
                        <Kabinet.Card name="jazz_on" role="Menteri" />
                    </Kabinet.Container>
                    <hr className="w-full my-5 border-gray-600" />
                    <footer className="text-gray-400">©️ {currentYear} - Holyland Team</footer>
                </div>
            </main>
        </>
    );
}
