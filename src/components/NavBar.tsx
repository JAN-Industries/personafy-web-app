import options from "@/app/api/auth/[...nextauth]/options";
import React from "react";
import { LoginButton } from "@/components/auth/Login.client";
import { LogoutButton } from "@/components/auth/Logout.client";
import ProfileIcon from "./ProfileIcon";
import { getServerSession } from "next-auth/next";

export default async function NavBar() {
	const session = await getServerSession(options);

	return (
		<header className="nav-bar__buttons">
			<nav className="w-full flex flex-row justify-between p-2 text-center">
				<div className="flex flex-row gap-4 text-xl font-bold">
					<a className="hover:underline" href="/">
						Home
					</a>
					<a className="hover:underline" href="/serverExample">
						Server Example
					</a>
					<a className="hover:underline" href="/clientExample">
						Client Example
					</a>
					<a className="hover:underline" href="/chat">
						Chat
					</a>
				</div>
				<div className="flex flex-row gap-4">
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
				</div>
			</nav>
		</header>
	);
}
