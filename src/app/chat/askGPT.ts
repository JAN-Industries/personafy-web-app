"use server";

import createApolloClient from "@/lib/apolloClientSSR";
import { AskGptQuery } from "@/types/graphql";
import { gql } from "@apollo/client";

const GPT_QUERY = gql`
	query AskGPT($question: String!) {
		askGPT(question: $question) {
			content
			error
		}
	}
`;

export const askGPT = async (question: string): Promise<AskGptQuery> => {
	const client = createApolloClient();
	const response = await client.query({
		query: GPT_QUERY,
		variables: { question },
	});
	const { data } = response;

	return data;
};
