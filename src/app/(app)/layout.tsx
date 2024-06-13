import React from "react";

export default function IndexLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-light dark:bg-background w-full h-full">
            <div className="md:w-[60%] m-auto w-full h-dvh">
                <main>{children}</main>
            </div>
        </div>
    );
}
