import { gql } from "@apollo/client";
import { getServerSession } from "next-auth/next";
import options from "../api/auth/[...nextauth]/options";
import UserCard from "@/components/UserCard";
import createApolloClient from "@/lib/apolloClientSSR";

const query = gql`
	query User {
		user {
			firstName
			lastName
			profile {
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

// This component shows an example graphql query executed on the server
// It also shows how to get the user session on the server
export default async function ServerPage() {
	const client = createApolloClient();
	const response = await client.query({ query });

	const { data } = response;

	console.log(data);

	if (response.loading) return <div>loading...</div>;
	if (!data.user) return <div>no user found, please login</div>;

	const session = await getServerSession(options);

	return (
		<section className="flex flex-col gap-6">
			<UserCard user={session?.user} pagetype={"Server"} />
			<div>
				<h1>Example Graphql Query:</h1>
				<pre className="text-left">{JSON.stringify(data, null, 2)}</pre>
			</div>
		</section>
	);
}
