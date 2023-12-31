import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import options from "@/app/api/auth/[...nextauth]/options";

export default async function ProfileIcon() {
	const session = await getServerSession(options);

	return (
		<Image
			className="border-2 border-black dark:border-slate-300 drop-shadow-xl shadow-black rounded-full"
			src={session?.user?.image ?? "/default-profile-pic.jpg"}
			width={32}
			height={32}
			alt={session?.user?.name ?? "Profile Pic"}
			priority={true}
		/>
	);
}
