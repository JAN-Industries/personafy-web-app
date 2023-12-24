"use client";
import { useState, useRef, CSSProperties, useEffect } from "react";

export default function ChatBar(props: {onSubmit: Function}) {
	const [value, setValue] = useState("");
	const [overflow, setOverflow] = useState("hidden")
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = () => {
		props.onSubmit(value);
		setValue("");
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key == 'Enter' && !e.shiftKey){
			handleSubmit()
			e.preventDefault();
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
	}, [textAreaRef, value, overflow]);

	const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
		const val = evt.target?.value;
		setValue(val);
	};
	return (
		<div className="flex justify-center">
				<textarea 
				ref={textAreaRef}
				className="resize-none w-2/3 text-md px-4 py-4"
				rows={1} 
				value={value}
				onKeyDown={handleKeyDown}
				onChange={handleChange}
				placeholder="Message your persona..."
				style={{overflowX: "hidden",
				overflowY: overflow,
				border: '2px solid gray',
				borderRadius: '2rem'
				} as CSSProperties}/>
		</div>
	);
}
