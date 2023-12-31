import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPHQL_URL } from "config";

export default function createApolloClient(jwe?: string | null) {
	const httpLink = new HttpLink({
		uri: GRAPHQL_URL,
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: jwe ? `Bearer ${jwe}` : "",
			},
		};
	});

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink),
		credentials: "include",
	});
}
