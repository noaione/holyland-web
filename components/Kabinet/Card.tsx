import React from "react";

const PresidenData = {
    name: "Kresendo",
    role: "Presiden",
};

export default function KabinetCard(props: typeof PresidenData) {
    const imagePath = `/assets/kabinet/${props.name.toLowerCase()}.png`;
    return (
        <div className="flex flex-col items-center px-4 py-4 bg-gray-700 rounded-md">
            <div className="flex">
                <img
                    className="rounded-full h-36 object-cover object-center aspect-w-1 aspect-h-1"
                    src={imagePath}
                    alt={(props.role ?? "Warga") + ` - ${props.name}`}
                />
            </div>
            <div className="flex flex-col items-center mt-2">
                <div className="text-xl font-bold">{props.name}</div>
                <div className="text-sm font-medium mt-0.5">{props.role}</div>
            </div>
        </div>
    );
}
