"use client";

import { Provider } from "jotai";
import React from "react";

export default function JotaiProviders(props: { children: React.ReactNode }) {
    return <Provider>{props.children}</Provider>;
}
