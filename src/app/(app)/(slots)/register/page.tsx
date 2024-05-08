"use client";

import React, { useEffect } from "react";
import EmailPassword from "./layouts/EmailPassword";
import { atom, PrimitiveAtom, useAtom } from "jotai";
import MobileNo from "./layouts/MobileNo";
import BusinessName from "./layouts/BusinessName";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { config } from "@/config/config";
import { register } from "./register";

const stepAtom: PrimitiveAtom<number> = atom<number>(1);
const formDataAtom: PrimitiveAtom<{}> = atom<{}>({});

const LoginPage = () => {
    const [step, setStep] = useAtom<number>(stepAtom);
    const [formData, setFormData] = useAtom<{}>(formDataAtom);
    const router: AppRouterInstance = useRouter();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            return router.back();
        }
    });

    const handleNext = (data: any) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const handlePrev = () => {
        if (step <= 1) return;
        setStep(step - 1);
    };

    const handleFormSubmit = async (data: any) => {
        const allData = { ...formData, ...data };
        const success = await register(allData);
        if (success) {
            return router.replace("/");
        }
    };

    return (
        <div className="flex flex-col h-full py-8 max-sm:px-4 items-center justify-center gap-y-12">
            {step === 1 && <EmailPassword onNext={handleNext} />}
            {step === 2 && (
                <BusinessName onNext={handleNext} onPrev={handlePrev} />
            )}
            {step === 3 && (
                <MobileNo
                    formData={formData}
                    onNext={handleFormSubmit}
                    onPrev={handlePrev}
                />
            )}
        </div>
    );
};

export default LoginPage;
