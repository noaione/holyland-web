import React from "react";

interface Class {
    className?: string;
}

export default function KabinetContainer({ children, className }: React.PropsWithChildren<Class>) {
    return <div className={`flex flex-col md:flex-row gap-2 ${className ?? ""}`}>{children}</div>;
}
