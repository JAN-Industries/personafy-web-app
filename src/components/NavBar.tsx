"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { SignupButton } from "@/components/buttons/Signup";
import { LoginButton } from "@/components/buttons/Login";
import { LogoutButton } from "@/components/buttons/Logout";
import ProfileIcon from "./ProfileIcon";

export const NavBar = () => {
	const { user } = useUser();

	return (
		<div className="nav-bar__buttons">
			<nav className="w-full flex flex-row justify-end gap-4 p-2 text-center">
				{!user && (
					<>
						<SignupButton />
						<LoginButton />
					</>
				)}
				{user && (
					<>
						<LogoutButton />
						<ProfileIcon />
					</>
				)}
			</nav>
		</div>
	);
};
