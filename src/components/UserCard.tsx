import Image from "next/image";

type User =
	| {
			name?: string | null | undefined;
			email?: string | null | undefined;
			image?: string | null | undefined;
	  }
	| undefined;

type Props = {
	user: User;
	pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
	const sectionStyle =
		"flex flex-col items-center p-2 bg-white rounded-lg font-bold text-black";

	const greeting = user?.name ? (
		<div className={sectionStyle}>Hello {user?.name}!</div>
	) : null;

	const emailDisplay = user?.email ? (
		<div className={sectionStyle}>{user?.email}</div>
	) : null;

	const userImage = user?.image ? (
		<Image
			className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto"
			src={user?.image}
			width={64}
			height={64}
			alt={user?.name ?? "Profile Pic"}
			priority={true}
		/>
	) : null;

	return (
		<section className="flex flex-col gap-4 text-lg">
			{greeting}
			{emailDisplay}
			{userImage}
			<p className="text-center">{pagetype} Page!</p>
		</section>
	);
}
