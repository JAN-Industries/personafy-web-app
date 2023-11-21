import createApolloClient from "@/lib/graphql";
import { Query, User } from "@/types/graphql";

export default async function SmallTextInput({
	query,
	mutation,
}: {
	query: any;
	mutation: any;
}) {
	const { user } = (await createApolloClient().query<Query>({ query: query }))
		.data;
	return <div>{user!.firstName}</div>;
}
