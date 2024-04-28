import { stringConfig } from "@/config/strings";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: stringConfig.title,
        short_name: stringConfig.title,
        description: stringConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/public/logo.jpg",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
