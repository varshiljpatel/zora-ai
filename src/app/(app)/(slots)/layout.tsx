import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";

const SlotLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-4 h-dvh flex flex-col">
            <div>
                <Navbar isBack={true} />
            </div>
            <div className="w-full h-full">{children}</div>
        </div>
    );
};

export default SlotLayout;
