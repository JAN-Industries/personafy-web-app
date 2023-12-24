import ChatBubble from "./ChatBubble";


export default function ResponseWindow(props: {userRequests: string[], aiResponses: string[], loading: boolean}) {
    const empty = props.userRequests.length == 0;
    if (empty){
        return(
            <div className="w-3/5 flex flex-col align-middle justify-center space-y-12">
                <div className="flex justify-center">
                    <img 
                    className="w-40 h-40 p-1 rounded-full ring-8 ring-gray-300 dark:ring-gray-500" 
                    src="/logo.png" 
                    style={{backgroundColor: '#f29a94', border: '3px solid black'}}
                    alt="Personafy Logo"/> 
                </div>
                <div className="flex justify-center">
                    <p className=" text-lg text-center">
                        <strong>
                            I'm here to help you be your best self.
                        </strong>
                    </p>
                </div>
                <div className="flex justify-center">
                    <p className=" text-sm text-center">
                        Get started by typing in the text prompt below. You can ask your persona for help with anything!
                    </p>
                </div>
            </div>
        )
    }
	return (
		<div className="w-3/5">
			{
                props.userRequests.map((response, index) => {
                    return (
                        <div key={index}>
                            <ChatBubble author="User" content={response} user={true}/>
                            <ChatBubble author="ChatGPT" content={props.aiResponses[index]} user={false} />
                        </div>
                    )
                })
            }
            <div className="w-full h-4"/>
		</div>
	);
}
