import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:4000",
	documents: "app/**/*.tsx",
	generates: {
		"app/gql/": {
			preset: "client",
			plugins: [],
		},
	},
};

export default config;
