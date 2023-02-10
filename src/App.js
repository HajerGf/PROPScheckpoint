
import './App.css';
import Profile from './profile/profile';

function App() {
  const show = (x) => { alert(x) }
  return (
    <div className="App">
      <Profile fullname="Hajer Guefrech" bio="Strong independant woman" profession="web developer" show={show} />
    </div>
  );
}

export default App;
