import { User } from "@/types/graphql";
import Image from "next/image";
import ProfileIcon from "./ProfileIcon";

type Props = {
	user: User;
};

export default function Card({ user }: Props) {
	const greeting = user.username ? (
		<div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
			Hello {user?.username}!
		</div>
	) : null;

	const emailDisplay = user?.email ? (
		<div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
			{user?.email}
		</div>
	) : null;

	const userImage = user.image ? <ProfileIcon size={64} /> : null;

	return (
		<section className="flex flex-col gap-4">
			{greeting}
			{emailDisplay}
			{userImage}
		</section>
	);
}
