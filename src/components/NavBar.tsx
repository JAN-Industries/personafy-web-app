import options from "@/app/api/auth/[...nextauth]/options";
import React from "react";
import { LoginButton } from "@/components/buttons/Login.client";
import { LogoutButton } from "@/components/buttons/Logout.client";
import ProfileIcon from "./ProfileIcon";
import { getServerSession } from "next-auth";

export default async function NavBar() {
	const session = await getServerSession(options);

	return (
		<div className="nav-bar__buttons">
			<nav className="w-full flex flex-row justify-end gap-4 p-2 text-center">
				{!session && (
					<>
						<LoginButton />
					</>
				)}
				{session && (
					<>
						<LogoutButton />
					</>
				)}
			</nav>
		</div>
	);
}
