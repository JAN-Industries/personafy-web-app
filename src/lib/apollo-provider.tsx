"use client";

import { HttpLink } from "@apollo/client";
import {
	NextSSRApolloClient,
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { GRAPHQL_URL } from "config";
import { setContext } from "@apollo/client/link/context";
import { ApolloLink } from "@apollo/client";
import { getSession } from "next-auth/react";

function makeClient() {
	const authMiddleware = setContext(async (_: unknown, { headers }) => {
		const session = await getSession();
		console.log("session", session);
		const token = session?.accessToken || "";

		console.log("token", token);

		return {
			headers: {
				...headers,
				authorization: `Bearer ${token}`,
			},
		};
	});

	const httpLink = new HttpLink({
		uri: GRAPHQL_URL,
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: ApolloLink.from([
			authMiddleware,
			typeof window === "undefined"
				? new SSRMultipartLink({
						stripDefer: true,
				  })
				: new ApolloLink((operation, forward) => forward(operation)),
			httpLink,
		]),
	});
}

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
