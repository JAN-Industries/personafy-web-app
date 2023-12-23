"use client";
import ChatBar from "@/components/chat/ChatBar";
import ResponseWindow from "./ResponseWindow";
import { useRef, useEffect } from "react";

export default function ChatWindow(
	props: 
	{
		userRequests: string[], 
		aiResponses: string[],
		onSubmit: Function
	}){
	

	const responseWindowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (responseWindowRef.current){
			responseWindowRef.current.scrollTop = responseWindowRef.current.scrollHeight;
		}
	}, [props.userRequests, props.aiResponses]);

	return (
		<div className="flex flex-col h-screen">
            <div ref={responseWindowRef} className="flex w-full justify-center p-5 overflow-y-auto flex-grow">
                <ResponseWindow userRequests={props.userRequests} aiResponses={props.aiResponses} loading={false} />
            </div>
			<div className="mx-auto inset-x-0 bottom-0 mb-4 w-full">
				<ChatBar onSubmit={props.onSubmit}/>
			</div>
		</div>
	);
}
