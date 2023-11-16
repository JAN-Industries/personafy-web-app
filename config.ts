export const URL =
	process.env.NODE_ENV === "production"
		? "https://chatgpme.nrgserver.com"
		: "http://localhost:3000";

export const GRAPHQL_URL =
	process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:4000";
