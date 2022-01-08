const MessageWindow = () => {
  return (
    <div class="h-screen w-full flex flex-col">
      <div class="grow w-full bg-red-800 text-white overflow-y-auto">

        {(() => {
          const x = [];
          for (let i = 0; i < 10; i++) {
            x.push(<p key={i}>Lorem</p>)
          }
          return x;
        })()}
        <p>Last Lorem</p>

      </div>
      <div class="h-14 w-full bg-blue-800">
      </div>
    </div>
  )
}

export default MessageWindow
