import React from "react";
import axios from "axios";
import Counter, { CounterCallback } from "./Counter";

interface PlayerAPIResponse {
    meta: {
        code: number;
        message: string;
    };
    data: {
        players: number;
    };
}

function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export default class PlayerCount extends React.Component {
    interval?: NodeJS.Timer;
    ccCallback: CounterCallback;

    constructor(props: {}) {
        super(props);
    }

    updateCounter() {
        const isDev = process.env.NODE_ENV === "development";
        if (isDev) {
            const customValue = getRandomArbitrary(1000, 10000);
            this.ccCallback.update(customValue);
        } else {
            axios
                .get<PlayerAPIResponse>("/api/players", {
                    responseType: "json",
                })
                .then((response) => {
                    if (response.data.meta.code === 0) {
                        console.info("Player count updated", response.data.data.players);
                        this.ccCallback.update(response.data.data.players);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    componentDidMount() {
        this.updateCounter();
        this.interval = setInterval(() => this.updateCounter(), 10000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <div className="flex flex-row mt-4">
                <div className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </div>
                <div className="flex flex-row">
                    <Counter initialValue={0} onMounted={(cb) => (this.ccCallback = cb)} />
                    <span className="ml-1">Pemain</span>
                </div>
            </div>
        );
    }
}
