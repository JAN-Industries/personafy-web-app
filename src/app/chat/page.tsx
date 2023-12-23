"use client";
import ChatWindow from "@/components/chat/ChatWindow";
import { useState } from "react";



export default function ChatPage() {
	const [userRequests, setUserRequests] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])
	const [aiResponses, setAiResponses] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])
	return (
		<section className="flex flex-col gap-6">
			<ChatWindow 
			userRequests={userRequests} 
			aiResponses={aiResponses} 
			setUserRequests={setUserRequests} 
			setAiResponses={setAiResponses}/>
		</section>
	);
}
