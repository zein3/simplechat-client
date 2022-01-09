const MessageBubble = ({isFromMe, message, senderUsername, senderIp}) => {
  const classes = ['p-2', 'max-w-xs', 'lg:max-w-lg', 'xl:max-w-xl', 'font-sans', 'text-xs', 'text-gray-200', 'rounded-sm', 'flex', 'flex-col'];
  const conditionalClass = isFromMe ? 
    ['bg-gray-900', 'self-end'] :
    ['bg-green-900', 'self-start'];

  const headerClasses = ['font-semibold', 'font-mono', 'text-blue-500', 'mb-1'];
  const conditionalHeaderClass = isFromMe ? ['text-right'] : [];


  return (
    <div className={classes.concat(conditionalClass).join(' ')}>
      <div className={headerClasses.concat(conditionalHeaderClass).join(' ')}>
        <span>{senderUsername}</span>
        <span>({senderIp})</span>
      </div>
      <div>
        <p className="inline break-words">{message}</p>
      </div>
    </div>
  )
}

export default MessageBubble
