import { KeyboardArrowRightSharp } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const AOCard = (props: {
    title: string;
    description: string;
    path?: string;
    key: number | string;
}) => {
    return (
        <div
            key={props.key}
            className="bg-light-100 dark:bg-dark-100 hover:bg-[#004075] dark:hover:bg-[#004075] rounded-xl w-full scale-100 lg:w-60 hover:text-light lg:hover:scale-110 transition ease-linear delay-500"
        >
            <Link className="p-6 block" href={props.path || ""}>
                <h2 className="font-medium tracking-tight pb-2">
                    {props.title.trim()}
                </h2>
                <p className="w-full">{props.description.trim()}</p>
                <span className="align-middle flex items-center pt-4 text-[0.75rem] justify-between">
                    Get started <KeyboardArrowRightSharp />
                </span>
            </Link>
        </div>
    );
};

export default AOCard;
