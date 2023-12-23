import ChatBar from "@/components/chat/ChatBar";
import ResponseWindow from "./ResponseWindow";

export default function ChatWindow(
	props: 
	{
		userRequests: string[], 
		aiResponses: string[],
		setUserRequests: React.Dispatch<React.SetStateAction<string[]>>,
		setAiResponses: React.Dispatch<React.SetStateAction<string[]>>
	}){
	const onSubmit = (text: string) => {
		props.setUserRequests([...props.userRequests, text])
	}
	return (
		<div>
            <div className="flex w-full justify-center p-5">
                <ResponseWindow userRequests={props.userRequests} aiResponses={props.aiResponses} />
            </div>
			<div className="mx-auto fixed inset-x-0 bottom-0 my-4">
				<ChatBar onSubmit={onSubmit}/>
			</div>
		</div>
	);
}
