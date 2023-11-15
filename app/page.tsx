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

	if (!data.books) return <div>loading...</div>;

	return (
		<main>
			{data?.books.map((book, i) => (
				<div key={i}>
					<div>{book!.title}</div>
					<div>{book!.author}</div>
					<div>{book!.date}</div>
				</div>
			))}
		</main>
	);
}
