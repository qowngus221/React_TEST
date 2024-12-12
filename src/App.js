import logo from './logo.svg';
import './App.css';

import Timer from './components/UseEffectExam'
import ParentComponent_01 from './components/01Parent';

function App() {
  return (
    <div className="App">
      <Timer />
      <hr/>
      <ParentComponent_01 />

    </div>
  );
}

export default App;
