import { gql } from "@apollo/client";
import createApolloClient from "@/lib/graphql";
import { Query } from "@/types/graphql";
import { getAuth } from "@/app/api/auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

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
	const { data } = await createApolloClient().query<Query>({
		query,
	});

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
