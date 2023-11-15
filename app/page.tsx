import { getClient } from "@/lib/graphql";

import { gql } from "@apollo/client";
import { Query } from "./gql/graphql";

const query = gql`
	query Books {
		books {
			author
			date
			title
		}
	}
`;

export const revalidate = 5;

export default async function Page() {
	const { data } = await getClient().query<Query>({ query });

	console.log(data.books![0]?.title);

	return <main>data</main>;
}
