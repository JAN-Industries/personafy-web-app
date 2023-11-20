import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";

const options = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
	],
	callbacks: {
		async jwt({ token, account }: { token: JWT; account: any }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }: { session: any; token: JWT }) {
			session.accessToken = token.accessToken;
			return session;
		},
	},
};

export default options;
