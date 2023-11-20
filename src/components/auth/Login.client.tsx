"use client";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
	return (
		<div className="flex items-center">
			<button
				onClick={() =>
					signIn("github", { callbackUrl: `${window.location.origin}/profile` })
				}
			>
				Log In
			</button>
		</div>
	);
};
