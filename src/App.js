import { useSelector } from 'react-redux'
import LoginModal from './components/LoginModal'
import MessageWindow from './components/MessageWindow'
import InputBox from './components/InputBox'

const App = () => {
  const username = useSelector(state => state.username.value);

  return (
    <div class="bg-gradient-to-r from-green-600 to-green-800">
      {!username && <LoginModal />}
      <MessageWindow />
      <InputBox />
    </div>
  );
}

export default App;
