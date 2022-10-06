import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Spinner } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <Header> </Header>
      {/* <Spinner animation="border" variant="primary" /> */}
      <Shop></Shop>
    </div>
  );
}

export default App;
