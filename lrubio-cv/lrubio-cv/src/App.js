import Cv from './components/cv';
import Principal from './components/principal';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Bienvenidos a mi web personal
        </h1>

      </header>
      <body>
        <Sidebar />
        <Principal />
      </body>
    </div>
  );
}

export default App;
