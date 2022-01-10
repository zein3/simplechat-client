import { useSelector, useDispatch } from 'react-redux'
import { setUsername } from '../reducers/usernameSlice'
import { resetMessages } from '../reducers/messageSlice'

const TopBar = () => {
  const username = useSelector(store => store.username.value);
  const dispatch = useDispatch();

  const handleChangeUsername = () => {
    dispatch(setUsername(''));
  }

  const handleDeleteMessages = () => {
    dispatch(resetMessages());
  }

  return (
    <div class="fixed top-0 px-2 w-full h-14 flex justify-between items-center bg-gray-900">
      <div class="h-max font-sans text-white">
        <span>Your username: {username}</span>
      </div>
      <div class="font-sans text-white">
        <button class="rounded-sm bg-teal-400 p-1 mx-2" onClick={handleChangeUsername}>
          Change username
        </button>
        <button class="rounded-sm bg-teal-400 p-1 mx-2" onClick={handleDeleteMessages}>
          Delete all messages
        </button>
      </div>
    </div>
  )
}

export default TopBar
