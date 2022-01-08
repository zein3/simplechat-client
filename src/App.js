import { useSelector } from 'react-redux'
import LoginModal from './components/LoginModal'
import MessageWindow from './components/MessageWindow'
import InputBox from './components/InputBox'

const App = () => {
  const username = useSelector(state => state.username.value);

  //document.body.classList.add('');

  return (
    <div>
      {!username && <LoginModal />}
      <MessageWindow />
      <InputBox />
    </div>
  );
}

export default App;
