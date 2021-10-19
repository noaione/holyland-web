import React from "react";

interface AdminContainerProps {
    className?: string;
}

export default function AdminContainer({
    children,
    className,
}: React.PropsWithChildren<AdminContainerProps>) {
    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-screen px-4 md:px-7 lg:px-10 ${
                className ?? ""
            }`}
        >
            {children}
        </div>
    );
}
