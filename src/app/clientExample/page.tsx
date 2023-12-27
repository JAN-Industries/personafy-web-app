"use client";

import { useSession } from "next-auth/react";
import { ApolloProvider, gql, useQuery } from "@apollo/client";
import createApolloClient from "@/lib/apolloClient";

const query = gql`
	query User {
		user {
			profile {
				firstName
				lastName
				education {
					id
					school
					degreeLevel
					fieldOfStudy
					startDate
					endDate
				}
			}
		}
	}
`;

export default function ClientPage() {
	const { data: session, status } = useSession();
	let client;

	if (status !== "loading") {
		client = createApolloClient(session?.accessToken);
	}

	const { loading, error, data } = useQuery(query, { client });

	if (status === "loading") return <div>Loading...</div>;
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error! {error.message}</div>;

	return (
		<section className="flex flex-col gap-6">
			<div>
				<h1>Example Graphql Query:</h1>
				<pre className="text-left">{JSON.stringify(data, null, 2)}</pre>
			</div>
		</section>
	);
}
