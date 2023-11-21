import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";

export default async function ProfileIcon({ size }: { size: number }) {
	const { user } = await getServerSession(options);

	return (
		<Link href="/profile">
			<Image
				className="border-2 border-black dark:border-slate-300 drop-shadow-xl rounded-full"
				src={user.image}
				width={size}
				height={size}
				alt={user.firstName + " " + user.lastName ?? "Profile Pic"}
				priority={true}
			/>
		</Link>
	);
}
