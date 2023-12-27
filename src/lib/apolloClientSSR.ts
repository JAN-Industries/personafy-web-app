import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
	NextSSRInMemoryCache,
	NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { AUTH_COOKIE_NAME, GRAPHQL_URL } from "config";
import { cookies } from "next/headers";

export default function createApolloClient() {
	const httpLink = new HttpLink({
		uri: GRAPHQL_URL,
	});

	const cookieStore = cookies();
	const jwe = cookieStore.get(AUTH_COOKIE_NAME);
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


