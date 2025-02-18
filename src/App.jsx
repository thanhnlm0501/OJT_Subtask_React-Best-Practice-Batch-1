import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './components/greeting';
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';
import InputDisplay from './components/InputDisplay';
import UserList from './components/UserList';
Counter;
import GreetingMessage from './components/GreetingMessage';
import StyledButton from './components/StyledButton';
import UserListAPI from './components/UserListAPI';
import RegisterForm from './components/RegisterForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputDisplay />
    </>
  );
}

export default App;
