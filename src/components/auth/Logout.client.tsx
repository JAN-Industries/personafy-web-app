"use client";
import { signOut } from "next-auth/react";

// TODO: Implement federated logout: https://github.com/nextauthjs/next-auth/issues/836

export const LogoutButton = () => {
	return (
		<div className="flex items-center">
			<button onClick={() => signOut()}>Log Out</button>
		</div>
	);
};
