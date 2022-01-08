import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsername } from '../reducers/usernameSlice'

const LoginModal = () => {
  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newUsername) {
      alert("Username can't be empty");
      return;
    }

    dispatch(setUsername(newUsername));
  }

  return (
    <div className="h-screen w-full absolute flex items-center justify-center bg-gray-800/50">
      <div className="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center">
        <div className="mb-4">
          <h2>Enter your username:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              className="rounded-full bg-gray-200 p-3" 
              placeholder="Username..."
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="flex-no-shrink text-white py-2 px-4 rounded bg-teal-400 hover:bg-teal-800">Go Chatting</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginModal;
