"use server";

import createApolloClient from "@/lib/apolloClientSSR";
import { GptQueryResponse } from "@/types/graphql";
import { gql } from "@apollo/client";

const GPT_QUERY = gql`
	query AskGPT($question: String!) {
		askGPT(question: $question) {
			content
			error
		}
	}
`;

export const GPTQuery = async (question: string): Promise<GptQueryResponse> => {
	const client = createApolloClient();
	const response = await client.query({
		query: GPT_QUERY,
		variables: { question },
	});
	const { data } = response;

	return data.askGPT;
};
