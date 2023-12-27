"use client";
import ChatWindow from "@/components/chat/ChatWindow";
import { useState } from "react";
import {  gql, useLazyQuery } from "@apollo/client";
import NavBar from "@/components/NavBar";

const GPT_QUERY = gql`
	query AskGPT($question: String!) {
		askGPT(question: $question) {
			content
			error
		}
	}
`;

export default function ChatPage() {
	const [userRequests, setUserRequests] = useState<string[]>([]);
	const [aiResponses, setAiResponses] = useState<string[]>([]);
	const [askGPT, { loading, data, error }] = useLazyQuery(GPT_QUERY);

	const onSubmit = async (text: string) => {
		setUserRequests([...userRequests, text]);
		askGPT({ variables: { question: text } }).then((response) => {
			setAiResponses([...aiResponses, response.data.askGPT.content]);
		});
	};
	return (
		<section className="flex flex-col gap-6 h-screen">
			{/* <NavBar /> */}
			<ChatWindow
				userRequests={userRequests}
				aiResponses={aiResponses}
				onSubmit={onSubmit}
			/>
		</section>
	);
}
