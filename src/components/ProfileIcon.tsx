"use client";

import React from "react";
import Image from "next/image";
import { redirect } from "next/dist/client/components/navigation";
import { useSession } from "next-auth/react";

export default function ProfileIcon() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/api/auth/signin?callbackUrl=/client");
		},
	});

	console.log("user", session);

	return (
		<div>
			{/* <Image
				src={user?.picture ?? ""}
				alt="Profile"
				className="w-8 h-8 rounded-full"
				width={80}
				height={80}
			/> */}
		</div>
	);
}
