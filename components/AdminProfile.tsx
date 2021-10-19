import React from "react";

interface IAdminProfile {
    name: string;
    image: string;
}

export default function AdminProfile({ name, image, children }: React.PropsWithChildren<IAdminProfile>) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <img className="h-[8rem] rounded-full pointer-events-none" src={image} />
            </div>
            <p className="font-semibold mt-4 text-lg">{name}</p>
            <p>{children}</p>
        </div>
    );
}
