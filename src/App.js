import color_wheel from './img/color_wheel.png';
import './App.css';
import Colordle from './colordle/Colordle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div><b>Colordle</b></div>
       <img src={color_wheel} className="Color-wheel" alt="color-wheel"/>
      </header>
      <Colordle></Colordle>
    </div>
  );
}

export default App;
