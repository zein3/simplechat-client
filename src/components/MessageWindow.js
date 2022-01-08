const MessageWindow = () => {
  return (
    <div class="pb-14 h-screen w-full">
      <div class="p-2 h-full w-full bg-red-800 text-white overflow-y-auto">

        {(() => {
          const x = [];
          for (let i = 0; i < 50; i++) {
            x.push(<p key={i}>Lorem</p>)
          }
          return x;
        })()}
        <p>Last Lorem</p>

      </div>
    </div>
  )
}

export default MessageWindow
