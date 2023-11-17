import GithubProvider from "next-auth/providers/github";

const options = {
	// Configure one or more authentication providers
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
		// ...add more providers here
	],
};

export default options;
