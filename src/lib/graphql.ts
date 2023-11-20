import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
	NextSSRInMemoryCache,
	NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { GRAPHQL_URL } from "config";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export default function createApolloClient() {
	const httpLink = new HttpLink({
		uri: GRAPHQL_URL,
	});

	const cookieStore = cookies();
	const jwe = cookieStore.get("next-auth.session-token");
	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: jwe ? `Bearer ${jwe.value}` : "",
			},
		};
	});

	const { getClient } = registerApolloClient(() => {
		return new NextSSRApolloClient({
			cache: new NextSSRInMemoryCache(),
			link: authLink.concat(httpLink),
			credentials: "include",
		});
	});

	return getClient();
}


