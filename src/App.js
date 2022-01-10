import { useSelector } from 'react-redux'
import LoginModal from './components/LoginModal'
import MessageWindow from './components/MessageWindow'
import InputBox from './components/InputBox'
import TopBar from './components/TopBar'

const App = () => {
  const username = useSelector(state => state.username.value);

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-800">
      {!username && <LoginModal />}
      <TopBar />
      <MessageWindow />
      <InputBox />
    </div>
  );
}

export default App;
