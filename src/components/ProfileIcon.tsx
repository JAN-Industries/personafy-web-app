import React from "react";
import Image from "next/image";
import { auth } from "@/lib/auth";

export default async function ProfileIcon() {
	const session = await auth();

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
