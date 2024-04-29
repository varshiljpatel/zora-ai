import AOCard from "@/components/add-ons/AOCard";
import React from "react";
import { addOnsList } from "./addOnsList";

const AddOnsPage = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 m-auto justify-center p-4">
                {addOnsList.map((item, index) => {
                    return (
                        <AOCard
                            keyValue={index}
                            title={item.title}
                            description={item.description || ""}
                            path={item.path || ""}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AddOnsPage;
