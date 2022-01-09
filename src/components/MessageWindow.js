import MessageBubble from './MessageBubble'

const MessageWindow = () => {
  const aaaaa = "welkjflwaejflkwjeflaj;lkfjlsa;dkfjlaskdfj;lawkjelfkjasdl;kfjasl;kdfjalk;efj;lkasjdfl;kjsdlfk;jasd;lfkjas;ldkfjasl;kdfj;laskdjflaskdjf;laskdjfl;sakdjfl;kasdjflaksjdflaskjdflaskdfjaskldjf;aslkjdf;askljdf;laskjdf;laskdfj;laskdfj;laskjdf;laskjdf;laskdfj;lksdjf;laskdjfl;askjflsakdjflaskdjfl;asdkjfl;sakdjfl;askdjfl;askdjflasdkjflkj";

  return (
    <div className="pb-14 h-screen w-full">
      <div className="p-2 h-full w-full text-white overflow-y-auto flex flex-col space-y-2">

        <MessageBubble
          isFromMe={false}
          message={aaaaa}
          senderUsername="Username"
          senderIp="192.168.1.1"
        />
        <MessageBubble
          isFromMe={true}
          message={aaaaa}
          senderUsername="Username"
          senderIp="192.168.1.1"
        />

      </div>
    </div>
  )
}

export default MessageWindow
