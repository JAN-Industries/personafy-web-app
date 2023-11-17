"use client";

import React from "react";
import Image from "next/image";
import { getUserProfileData } from "@/lib/profile.service";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileIcon() {
	const { user } = useUser();

	console.log("user", user);

	return (
		<div>
			<Image
				src={user?.picture ?? ""}
				alt="Profile"
				className="w-8 h-8 rounded-full"
				width={80}
				height={80}
			/>
		</div>
	);
}
