"use client";

import ChatBar from "@/app/chat/ChatBar";
import ResponseWindow from "./ResponseWindow";
import { useRef, useState } from "react";
import { askGPT } from "./askGPT";

export default function ChatWindow() {
	const responseWindowRef = useRef<HTMLDivElement>(null);

	const [userRequests, setUserRequests] = useState<string[]>([]);
	const [aiResponses, setAiResponses] = useState<string[]>([]);

	const formAction = async (formData: FormData) => {
		setUserRequests([...userRequests, formData.get("text") as string]);
		const GPTResponse = await askGPT(formData.get("text") as string);
		setAiResponses([...aiResponses, GPTResponse.askGPT!.content!]);
	};

	// useEffect(() => {
	// 	if (responseWindowRef.current) {
	// 		responseWindowRef.current.scrollTop =
	// 			responseWindowRef.current.scrollHeight;
	// 	}
	// }, []);

	return (
		<div className="flex flex-col flex-grow">
			<div
				ref={responseWindowRef}
				className="flex w-full justify-center p-5 flex-grow"
			>
				<ResponseWindow
					userRequests={userRequests}
					aiResponses={aiResponses}
					loading={false}
				/>
			</div>
			<div className="mx-auto inset-x-0 bottom-0 mb-4 w-full">
				<ChatBar formAction={formAction} />
			</div>
		</div>
	);
}
