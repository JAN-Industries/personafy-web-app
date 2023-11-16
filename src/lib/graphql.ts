import { HttpLink } from "@apollo/client";
import {
	NextSSRInMemoryCache,
	NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { GRAPHQL_URL } from "config";

export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: new HttpLink({
			uri: GRAPHQL_URL,
		}),
	});
});
