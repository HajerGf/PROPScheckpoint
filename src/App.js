
import './App.css';
import Profile from './profile/profile';

function App() {
  const alertname = (x) => { alert(x) }
  return (
    <div className="App">
      <Profile fullname="Hajer Guefrech" bio="Strong independant woman" profession="web developer" show={alertname} />
    </div>
  );
}

export default App;
