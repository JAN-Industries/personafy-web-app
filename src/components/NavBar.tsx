import options from "@/app/api/auth/[...nextauth]/options";
import React from "react";
import { LoginButton } from "@/components/auth/Login.client";
import { LogoutButton } from "@/components/auth/Logout.client";
import ProfileIcon from "./ProfileIcon";
import { getServerSession } from "next-auth";

export default async function NavBar() {
	const session = await getServerSession(options);

	return (
		<div className="nav-bar__buttons">
			<nav className="w-full flex flex-row justify-end gap-4 p-2 text-center text-[#A6A0A0]">
				{!session && (
					<>
						<LoginButton />
					</>
				)}
				{session && (
					<>
						<LogoutButton />
						<ProfileIcon />
					</>
				)}
			</nav>
		</div>
	);
}
