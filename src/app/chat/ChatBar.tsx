"use client";
import { useRef } from "react";

export default function ChatBar({
	formAction,
}: {
	formAction: (arg0: FormData) => {};
}) {
	const formRef = useRef<HTMLFormElement>(null);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			if (formRef.current) {
				const formData = new FormData(formRef.current);
				formAction(formData);
				formRef.current.reset();
			}
		}
	};

	return (
		<form className="flex justify-center" ref={formRef}>
			<input
				type="text"
				name="text"
				className="resize-none w-2/3 text-md px-4 py-4 overflow-x-hidden border-2 border-gray-300 rounded-2xl"
				placeholder="Message your persona..."
				onKeyDown={handleKeyDown}
				required
			/>
		</form>
	);
}
