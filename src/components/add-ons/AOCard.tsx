import { KeyboardArrowRightSharp } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const AOCard = (props: {
    title: string;
    description: string;
    path?: string;
    keyValue: number | string;
}) => {
    return (
        <div
            key={props.keyValue}
            className="bg-light-100 rounded-2xl w-full scale-100 lg:w-60 hover:bg-dark-100 hover:text-light lg:hover:scale-110 transition ease-linear delay-500"
        >
            <Link className="p-6 block" href={props.path || ""}>
                <h2 className="font-medium tracking-tight pb-2">
                    {props.title.trim()}
                </h2>
                <p className="w-full">{props.description.trim()}</p>
                <span className="align-middle flex items-center pt-4 text-[0.75rem] justify-between">
                    Get started <KeyboardArrowRightSharp fontSize="small" />
                </span>
            </Link>
        </div>
    );
};

export default AOCard;
