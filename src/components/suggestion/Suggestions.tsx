import React from "react";
import Suggestion from "./Suggestion";

const Suggestions = (props: { suggestions: string[] }) => {
	return (
		<div className="sm:w-4/6 mx-8 flex flex-col items-center sm:gap-y-6 gap-y-4">
			<p className="text-[26px] tracking-tight text-center font-normal">
				Explore suggestions
			</p>
			<span className="w-24 mb-4 h-[2px] rounded-full bg-dark"></span>

			{props.suggestions.map((suggestion, index) => {
				return <Suggestion text={suggestion.trim()} key={index} />;
			})}
		</div>
	);
};

export default Suggestions;
