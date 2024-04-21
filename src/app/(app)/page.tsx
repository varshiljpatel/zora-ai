"use client";

import Vec1 from "@/assets/vectors/Vec1";
import Suggestions from "@/components/suggestion/Suggestions";
import Navbar from "@/components/navbar/Navbar";
import PromptArea from "@/components/prompt/PromptArea";
import { useEffect, useState } from "react";

export default function Home() {
	const [suggestions, setSuggestions] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const suggestionData = await fetch("/api/suggestions", {
				method: "GET",
				cache: "no-store",
				next: { revalidate: 0 },
			});
			let suggestionsResponse = await suggestionData.json();
			let tunedSuggestions: string = await String(
				suggestionsResponse.message
			)
				.replace(`"`, ``)
				.trim();
			let suggestionsArray: string[] = tunedSuggestions.split("||");
			setSuggestions(suggestionsArray);
		})();
		return;
	}, []);

	return (
		<div className="h-dvh flex flex-col justify-between sm:p-8 p-4">
			<Navbar />
			<div className="w-full h-full overflow-scroll flex">
				<div className="items-center h-full justify-around flex flex-col py-10 w-full">
					<Vec1 height={250} />
					<Suggestions suggestions={suggestions} />
				</div>
			</div>
			<PromptArea />
		</div>
	);
}
