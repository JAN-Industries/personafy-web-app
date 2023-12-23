import ChatBar from "@/components/chat/ChatBar";
import ResponseWindow from "./ResponseWindow";

export default async function ChatWindow() {

	return (
		<div >
            <div className="flex w-full justify-center">
                <ResponseWindow />
            </div>
			<div className="mx-auto fixed inset-x-0 bottom-0 my-4">
				<ChatBar />
			</div>
		</div>
	);
}
