import Registration from './components/Registration';
import Dummy from './components/Dummy';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='leftContainer'>
        <Registration />
      </div>
      <div className='rightContainer'>
        <Dummy />
      </div>
    </div>
  );
}

export default App;
