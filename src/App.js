import logo from './logo.svg';
import './App.css';
//authentication imports
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import SignOut from './authentication/SignOut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUp/>
        <SignOut/>
        <SignUp/>
      </header>
    </div>
  );
}

export default App;
