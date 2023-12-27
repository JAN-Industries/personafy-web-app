"use client";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
	return (
		<div className="flex items-center">
			<button onClick={() => signIn("github")}>Log In</button>
		</div>
	);
};
