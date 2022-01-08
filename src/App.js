import { useSelector } from 'react-redux'
import LoginModal from './components/LoginModal.js'

const App = () => {
  const username = useSelector(state => state.username.value);

  return (
    <div>
      {!username && <LoginModal />}
    </div>
  );
}

export default App;
