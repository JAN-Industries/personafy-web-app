"use client";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
	return (
		<div className="flex items-center">
			<button
				onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })}
			>
				Log Out
			</button>
		</div>
	);
};
