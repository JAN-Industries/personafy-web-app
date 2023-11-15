// app/page.js
import { getClient } from "@/lib/graphql";

import { gql } from "@apollo/client";

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
	const { data } = await getClient().query({ query });

	console.log(data);

	return <main>data</main>;
}
