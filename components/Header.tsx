import React from "react";

export default function Header() {
    return (
        <header className="py-4 px-2 flex flex-col items-center">
            <img className="object-fit rounded-full h-24 mt-10" src="/holyland.png" />
            <div className="Cinzel-Font font-medium text-xl mt-4">Holyland</div>
            {/* <div className="my-4 flex flex-row justify-evenly gap-2">
                <div className="flex flex-row">
                    <button className="big-button active">Home</button>
                </div>
                <div className="flex flex-row">
                    <button className="big-button">About</button>
                </div>
            </div> */}
        </header>
    );
}
