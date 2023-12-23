"use client";
import ChatWindow from "@/components/chat/ChatWindow";
import { useState } from "react";
import {  gql } from "@apollo/client";
import { getClient } from "@/lib/graphql";
import { Query } from "@/types/graphql";


export default function ChatPage() {
	const [userRequests, setUserRequests] = useState<string[]>([])
	const [aiResponses, setAiResponses] = useState<string[]>([])

	const onSubmit = async (text: string) => {
		setUserRequests([...userRequests, text])
		// const query = gql`
		// 					query AskGPT($question: String) {
		// 						askGPT(question: ${text}) {
		// 						content
		// 						error
		// 						}
		// 					}
		// 					`;
		// const { loading, error, data } = await getClient().query<Query>({query});
		// console.log(data);
		// setAiResponses([...aiResponses, data.content])
		setAiResponses([...aiResponses, "You suck!"])
	}
	return (
		<section className="flex flex-col gap-6">
			<ChatWindow 
			userRequests={userRequests} 
			aiResponses={aiResponses} 
			onSubmit={onSubmit}/>
		</section>
	);
}
