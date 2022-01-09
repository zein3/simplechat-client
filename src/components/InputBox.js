import { useState } from 'react'

const InputBox = () => {
  const [messageField, setMessageField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-2 py-1 lg:py-2 lg:px-8 w-full fixed bottom-0 h-14 bg-gray-900">
        <div className="flex flex-row justify-items-center align-items-center space-x-4 w-full h-full font-sans">
          <input
            className="grow rounded-full p-4 bg-gray-200"
            value={messageField}
            onChange={(e) => setMessageField(e.target.value)}
            placeholder="Message.."
          />
          <button className="rounded-full bg-teal-400 hover:bg-teal-500 w-11 h-11 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}

export default InputBox
