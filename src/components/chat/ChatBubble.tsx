

export default function ChatBubble(props: { author: string, content: string, user: boolean}) {
    let imgSrc = props.user? "/default-profile-pic.jpg": "/ChatGPT_logo.svg.png"
	return (
		<div>
            <div className="flex items-center space-x-4">
                <img className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={imgSrc} alt="Bordered avatar" />
                <h1 className="bol"><strong> {props.author} </strong></h1>
            </div>
            <div>
                <p className="ml-10">
                    {props.content}
                </p>
            </div>
        </div>
	);
}
