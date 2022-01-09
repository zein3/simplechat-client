import { useSelector } from 'react-redux'
import MessageBubble from './MessageBubble'

const MessageWindow = () => {
  const messages = useSelector(state => state.messages.value);

  return (
    <div className="pb-14 h-screen w-full">
      <div className="p-2 h-full w-full text-white overflow-y-auto flex flex-col space-y-2">

        {messages.map(message => (
          <MessageBubble
            senderUsername={message.senderUsername}
            senderIp={message.senderIp}
            message={message.message}
            isFromMe={message.isFromMe}
          />
        ))}

      </div>
    </div>
  )
}

export default MessageWindow
