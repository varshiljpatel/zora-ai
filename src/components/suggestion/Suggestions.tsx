import React from "react";
import Suggestion from "./Suggestion";

const Suggestions = (props: {suggestions: string[]}) => {
	return (
		<div className="sm:w-4/6 mx-4 flex flex-col items-center sm:gap-y-6 gap-y-4">
			<p className="text-[22px] text-center font-medium">
				Explore few suggestions
			</p>
			<span className="w-24 h-[2px] rounded-full bg-black"></span>

			{props.suggestions.map((suggestion, index) => {
				return <Suggestion text={suggestion} key={index} />;
			})}
		</div>
	);
};

export default Suggestions;
