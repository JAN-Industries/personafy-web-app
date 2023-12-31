import Image from "next/image";

export default function ChatBubble(props: {
	author: string;
	content: string;
	user: boolean;
}) {
	let imgSrc = props.user
		? "/default-profile-pic.jpg"
		: "/ChatGPT_logo.svg.png";
	return (
		<div className="m-4 p-1">
			<div className="flex items-center space-x-4">
				<Image
					className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
					src={imgSrc}
					alt="Bordered avatar"
					width={32}
					height={32}
				/>
				<h1 className="bol">
					<strong> {props.author} </strong>
				</h1>
			</div>
			<div>
				<p className="ml-10">
					{props.content == undefined && !props.user
						? "Generating..."
						: props.content}
				</p>
			</div>
		</div>
	);
}
