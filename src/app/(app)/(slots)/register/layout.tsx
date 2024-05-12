import LoadingAnimation from "@/components/loading/LoadingAnimation";
import React, { Suspense } from "react";

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
    return <Suspense fallback={<LoadingAnimation />}>{children}</Suspense>;
};

export default RegisterLayout;
