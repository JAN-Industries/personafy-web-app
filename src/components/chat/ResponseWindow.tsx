import ChatBubble from "./ChatBubble";


export default function ResponseWindow(props: {userRequests: string[], aiResponses: string[]}) {
    
	return (
		<div className="s w-2/5">
			{
                props.userRequests.map((response, index) => {
                    return (
                        <>
                            <ChatBubble author="User" content={response} user={true}/>
                            <ChatBubble author="ChatGPT" content={props.aiResponses[index]} user={false} />
                        </>
                    )
                })
            }
		</div>
	);
}
