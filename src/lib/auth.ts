import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const config = {
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
};

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth(config);
