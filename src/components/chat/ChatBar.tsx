"use client";
import { useState, useRef, CSSProperties, useEffect } from "react";

export default function ChatBar(props: {onSubmit: Function}) {
	const [value, setValue] = useState("");
	const [overflow, setOverflow] = useState("hidden")
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const handleSubmit = (e: React.KeyboardEvent) => {
		if (e.key == 'Enter' && !e.shiftKey){
			props.onSubmit(value);
			e.preventDefault();
			setValue("");
		}
	}
	useEffect(() => {
		if (textAreaRef.current) {
			const prevHeight = textAreaRef.current.style.height;
			textAreaRef.current.style.height = "0px";
			const scrollHeight = textAreaRef.current.scrollHeight;
			const p = scrollHeight / window.screen.height 
			if (p <= 0.25){
				textAreaRef.current.style.height = scrollHeight + "px";
				if (overflow == "scroll"){
					setOverflow("hidden")
				}
			}
			else{
				textAreaRef.current.style.height = prevHeight;
				if (overflow == "hidden"){
					setOverflow("scroll")
				}
			}
		}
	}, [textAreaRef, value]);

	const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
		const val = evt.target?.value;
		setValue(val);
	};
	return (
		<div className="flex justify-center">
				<textarea 
				ref={textAreaRef}
				className="border-2 resize-none w-2/5 text-lg px-4 py-4"
				rows={1} 
				value={value}
				onKeyDown={handleSubmit}
				onChange={handleChange}
				style={{overflowX: "hidden",
				overflowY: overflow} as CSSProperties}/>
		</div>
	);
}
