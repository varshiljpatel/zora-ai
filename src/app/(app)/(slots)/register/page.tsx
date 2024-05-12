"use client";

import React, { useEffect } from "react";
import EmailPassword from "./layouts/EmailPassword";
import { atom, PrimitiveAtom, useAtom } from "jotai";
import MobileNo from "./layouts/MobileNo";
import BusinessName from "./layouts/BusinessName";
import {
    ReadonlyURLSearchParams as Params,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { Suspense } from "react";
import { register } from "./register";
import { useSession } from "next-auth/react";
import { stringConfig } from "@/config/strings";
import LoadingAnimation from "@/components/loading/LoadingAnimation";

const stepAtom: PrimitiveAtom<number> = atom<number>(1);
const formDataAtom: PrimitiveAtom<{}> = atom<{}>({});

const RegisterPage = () => {
    const [step, setStep] = useAtom<number>(stepAtom);
    const [formData, setFormData] = useAtom<{}>(formDataAtom);
    const router = useRouter();
    const session = useSession();
    const params: Params = useSearchParams();
    const stepNo: string | null = params?.get("step");

    useEffect(() => {
        if (stepNo) {
            const stepNoInNumber: number = Number.parseInt(stepNo);
            if (stepNoInNumber > 3 || stepNoInNumber < 1) return;
            setStep(Number.parseInt(stepNo));
        }
    }, [stepNo, setStep]);

    useEffect(() => {
        if (
            localStorage.getItem(stringConfig.localStorageToken) ||
            session.status === "authenticated"
        ) {
            return router.replace("/");
        }
    }, [router, session.status]);

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
        <Suspense fallback={<LoadingAnimation />}>
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
        </Suspense>
    );
};

export default RegisterPage;
